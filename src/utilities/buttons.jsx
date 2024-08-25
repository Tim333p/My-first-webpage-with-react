

const Buttons = (props) => {

    let name = ''

  return (
    <button className="border-solid rounded-lg bg-pink w-24 h-12 m-1 pt-2 pb-2 px-5 ml-9 text-black font-bold text-xl">{props.name}</button>
  )
}

export default Buttons