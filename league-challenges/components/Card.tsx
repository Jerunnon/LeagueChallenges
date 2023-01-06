import React from "react";

import Image from "next/image";

interface ICardComposition {
    Body: React.FunctionComponent<{children: React.ReactNode[], align: string}>;
    Heading: React.FunctionComponent<{title: string}>;
    Text: React.FunctionComponent<{text: string}>;
    Actions: React.FunctionComponent<{variant: string, text: string, children?: React.ReactNode | React.ReactNode[]}>
    Image: React.FunctionComponent<{src: string, alt: string, className?: string}>
}

type variants = 'primary' | 'secondary' | 'accent';

const CardContext = React.createContext({});

function useCardContext() {
    let context = React.useContext(CardContext);

    if(!context) throw new Error("Child components of Card cannot be rendered outside the Card component!")
    else
    return context;
}

const Card: React.FC<{children: React.ReactNode, width: string, className?: string}> & ICardComposition = props => {
    return (
        <CardContext.Provider value={{}}>
             <div className={`card ${props.width} ${props.className} bg-light-200 dark:bg-space-200`}>
                 {props.children}
             </div>
       </CardContext.Provider>
    )
}

const Body: React.FC<{children: React.ReactNode[], align: string}> = props => {
    return (
        <div className={`card-body ${props.align} `}>
            {props.children}
        </div>
    )
}

const Heading: React.FC<{title: string}> = props => {
    return (
        <h2>{props.title}</h2>
    )
};

const Text: React.FC<{text: string}> = props => {
    return (
        <p>{props.text}</p>
    )
};

const Actions: React.FC<{variant: string, text: string, children?: React.ReactNode | React.ReactNode[]}> = props => {
    return (
        <div className={`card-actions justify-end`}>
            <button className={`btn ${props.variant}`}>{props.text}</button>
            {props.children}
        </div>
    )
};

const Img: React.FC<{src: string, alt: string, className?: string}> = props => {
    useCardContext();

    return (
        <figure className="w-full h-52 relative ">
            <Image src={props.src} fill sizes="66vw" alt={props.alt} className={props.className} />
        </figure>
    )
};

Card.Body = Body;
Card.Heading = Heading;
Card.Text = Text;
Card.Actions = Actions;
Card.Image = Img;

export { Card } ;
