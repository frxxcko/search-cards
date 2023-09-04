import React from "react";

export const Card = ({ className, children, addDividers, showCloseButton, style, close, cardImageURL }) => {
    const isRoutesType = (child) => typeof child === 'object' && child?.type?.name === 'Routes';

    return (
        <div style={{ backgroundImage: `url(${cardImageURL})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', ...style }} className={["card border-0 rounded-1 card-background", className ? className : ""].join(" ").trim().replace(/\s+/g, " ")} >
            {showCloseButton && (
                <div className='d-flex justify-content-end'>
                    <i className="fas fa-times et-coupon-close-btn" onClick={close}></i>
                </div>
            )}
            {children && Array.isArray(children) ? (
                children.map((child, index) => (
                    <React.Fragment key={index}>
                        {child}
                        {addDividers && !isRoutesType(child) && index !== children.length - 1 && (
                            <div className="divider"></div>
                        )}
                    </React.Fragment>
                ))
            ) : (
                <React.Fragment>
                    {children}
                </React.Fragment>
            )}
        </div>
    )
}