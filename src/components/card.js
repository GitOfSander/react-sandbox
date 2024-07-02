import React from "react";
import styles from "../assets/scss/components/card.module.scss";

export const Card = (props) => {
    let classes = (typeof props.class !== 'undefined' && props.class !== '' ? props.class : '')

    return (
        <div className={ styles.card + " " + classes }>
            { props.children }

            { props.loading && (
                <div className={ styles.loading }>
                    <span className="card-body-spinner spinner-border spinner-border-md"></span>
                </div>
            )}

            { props.error && (
                <div className={ styles.error_overlay }>
                    <span>{ props.error }</span>
                </div>
            )}
        </div>
    )
}

export const CardHeader = (props) => {
    let displaySubtitle = (typeof props.subtitle !== 'undefined' && props.subtitle !== '' ? true : false)
    let classes = (typeof props.class !== 'undefined' && props.class !== '' ? props.class : '')

    return (
        <div className={ styles.header + " " + classes }>
            <div className={ styles.left }>
                <h2>{ props.title }</h2>
                {displaySubtitle && <h3>{ props.subtitle }</h3> }
            </div>
            <div className={ styles.right }>
                { props.children }
            </div>
        </div>
    )
}

export const CardBody = (props) => {
    let classes = (typeof props.class !== 'undefined' && props.class !== '' ? props.class : '')

    return (
        <div className={ styles.body + " " + classes }>
            { props.children }
        </div>
    )
}

export const CardFooter = (props) => {
    let classes = (typeof props.class !== 'undefined' && props.class !== '' ? props.class : '')

    return (
        <div className={ styles.footer + " " + classes }>
            { props.children }
        </div>
    )
}