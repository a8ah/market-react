import { useFetch } from "../hooks/useFetch"

const SelectList = ({title,url,handleChange}) =>{

    const [data,error,loading] = useFetch(url);
    console.log(data,error,loading);

    if(!data) return null;

    let id=`select-${title}`;
    let label = title.charAt(0).toUppercase()+title.slice(1);

    return(
        <>
            <label htmlFor={id}>{label}</label>
            {/* {loading && <Loader/>} */}
            <select name={id} id={id} onChange={handleChange}>
                <option value=""> Seleccione un(a) {title}</option>
                {data && data.map((element) => <option value={element.id}>{element.name}</option>)}
            </select>
        </>
    )
}

export default SelectList
