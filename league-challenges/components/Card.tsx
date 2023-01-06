import React from "react";

import Image from "next/image";

type CardProps = {
    children: React.ReactNode,
    className?: string | '',
    width: string,
};

type variants = 'primary' | 'secondary' | 'accent';

const CardContext = React.createContext({});

function useCardContext() {
    let context = React.useContext(CardContext);

    if(!context) throw new Error("Child components of Card cannot be rendered outside the Card component!")
    else
    return context;
}

const Card = ({children, className, width}: CardProps): JSX.Element => {
    return (
        <CardContext.Provider value={{}}>
            <div className={`card ${width} ${className} bg-light-200 dark:bg-space-200`}>
                {children}
            </div>
        </CardContext.Provider>
    )
};

Card.Body = function Body({children, align}: {children: React.ReactNode[], align?: string}) {
    return (
        <div className={`card-body ${align} `}>
            {...children}
        </div>
    )
};

Card.Heading = function Heading({title}: {title: string}) {
    return (
        <h2>{title}</h2>
    )
};

Card.Text = function Text({text}: {text: string}) {
    return (
        <p>{text}</p>
    )
};

Card.Actions = function Actions({text, variant, children}: {text: string, variant: variants, children?: React.ReactNode}) {
    return (
        <div className={`card-actions justify-end`}>
            <button className={`btn btn-${variant}`}>{text}</button>
            {children}
        </div>
    )
};

Card.Image = function CardImage({src, alt, className}: {src: string, alt: string, className?: string }) {
    useCardContext();

    return (
        <figure className="w-full h-52 relative ">
            <Image src={src} fill sizes="66vw" alt={alt} className={className} />
        </figure>
    )
};

export default Card;
