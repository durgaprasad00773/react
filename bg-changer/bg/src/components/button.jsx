function Button(props)
{

    return (
        <div>
            <button className="px-4 py-2 text-white rounded-xl border border-black cursor-pointer" 
            style = {{backgroundColor: props.text.toLowerCase()}}
            onClick = {() => props.setColor(props.text.toLowerCase())}
            >
                {props.text}
            </button>
        </div>
    )
}

export default Button