import React, { useCallback, useMemo, useRef,useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, CardBody, CardHeader } from '../../components/card';
import CheckboxList from '../../components/fields/checkboxList';
import IngredientFieldsList from '../../components/fields/ingredientFieldsList';
import recipeService from '../../services/recipe.service';
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";

const RecipeForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({
        title: '',
        description: '',
        ingredients: Array(10).fill({ name: '', amount: '', amountType: 'Grams' }),
        tags: []
    });
    const tags = ["Sweet", "Salty", "Breakfast", "Lunch", "Dinner"];
    const quill = useRef();

    const imageHandler = useCallback(() => {
        // Create an input element of type 'file'
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();
    
        // When a file is selected
        input.onchange = () => {
          const file = input.files[0];
          const reader = new FileReader();
    
          // Read the selected file as a data URL
          reader.onload = () => {
            const imageUrl = reader.result;
            console.log(quill);
            const quillEditor = quill.current.getEditor();
    
            // Get the current selection range and insert the image at that index
            const range = quillEditor.getSelection(true);
            quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
          };
    
          reader.readAsDataURL(file);
        };
      }, []);
    
      const modules = useMemo(
        () => ({
          toolbar: {
            container: [
              [{ header: [2, 3, 4, false] }],
              ["bold", "italic", "underline", "blockquote"],
              [{ color: [] }],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
              ],
              ["link", "image"],
              ["clean"],
            ],
            handlers: {
              image: imageHandler,
            },
          },
          clipboard: {
            matchVisual: true,
          },
        }),
        [imageHandler]
      );

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color",
        "clean",
      ];

    useEffect(() => {
        if (id) {
            recipeService.getRecipe(id).then(response => {
                const fetchedRecipe = response.data;
                const ingredients = JSON.parse(fetchedRecipe.ingredients);
                setRecipe({
                    ...fetchedRecipe,
                    ingredients: ingredients.concat(Array(Math.max(10, ingredients.length) - ingredients.length).fill({ name: '', amount: '', amountType: 'Grams' })) // Ensure at least 10 fields
                });
            });
        }
    }, [id]);

    const handleAddIngredient = () => {
        setRecipe({ ...recipe, ingredients: [...recipe.ingredients, { name: '', amount: '', amountType: 'Grams' }] });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('ingredient')) {
            const index = parseInt(name.split('-')[1], 10);
            const field = name.split('-')[2];
            const updatedIngredients = [...recipe.ingredients];
            updatedIngredients[index] = {
                ...updatedIngredients[index],
                [field]: value
            };
            setRecipe({ ...recipe, ingredients: updatedIngredients });
        } else if (name === 'tags') {
            const newTags = [...recipe.tags];
            if (e.target.checked) {
                newTags.push(value);
            } else {
                const index = newTags.indexOf(value);
                if (index > -1) {
                    newTags.splice(index, 1);
                }
            }
            setRecipe({ ...recipe, tags: newTags });
        } else {
            setRecipe({ ...recipe, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { ...recipe, ingredients: JSON.stringify(recipe.ingredients), tags: recipe.tags.join(',') };

        if (id) {
            recipeService.updateRecipe(id, payload).then(() => {
                navigate('/dashboard/recipes');
            });
        } else {
            recipeService.createRecipe(payload).then(() => {
                navigate('/dashboard/recipes');
            });
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Card>
                            <CardHeader title={ (id ? 'Edit' : 'Add') + ' Recipe'} subtitle=""></CardHeader>
                            <CardBody>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label>Title:</label>
                                        <input
                                            type="text"
                                            name="title"
                                            className='form-control'
                                            value={recipe.title}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label>Description:</label>
                                        <QuillEditor
                                            theme="snow"
                                            name="editor"
                                            onChange={handleChange}
                                            formats={formats}
                                            modules={modules}
                                        />
                                        {/*<Editor
                                            ref={quillRef}
                                            readOnly={readOnly}
                                            defaultValue={new Delta()}
                                            //onSelectionChange={setRange}
                                            inputName="description"
                                            onTextChange={handleChange}
    />*/}
                                    </div>

                                    <IngredientFieldsList
                                        ingredients={recipe.ingredients}
                                        handleChange={handleChange}
                                        handleAddIngredient={handleAddIngredient}
                                    />

                                    <CheckboxList label="Tags"
                                                inputName="tags"
                                                items={tags} 
                                                selectedItems={recipe.tags} 
                                                handleChange={handleChange} 
                                    />

                                    <button type="submit">Save</button>
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeForm;