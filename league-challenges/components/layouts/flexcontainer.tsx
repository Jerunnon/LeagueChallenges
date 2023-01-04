type IContainer = {
    direction: string,
    wrap: boolean,
    alignItems: string
    justifyContent: string
    children: React.ReactNode;
}

export const FlexContainer = ({ direction, wrap, alignItems, justifyContent, children}: IContainer):JSX.Element => {
    return (
        <div className={`container flex flex-${direction} ${wrap ? 'flex-wrap' : 'flex-nowrap'} items-${alignItems} justify-${justifyContent} mx-auto p-4`}>
            {children}
        </div>
    )
}