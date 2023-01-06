type Button = {
    children: JSX.Element
}

export default function Button({ children }: Button) {
    return (
        <button className="btn bg-pine hover:bg-gray-500 border-none text-white">
            {children}
        </button>
    )
}