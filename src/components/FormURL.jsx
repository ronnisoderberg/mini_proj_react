import React from "react";



const FormURL = (props) => {

    const {formInput, handleChange, handleSubmit} = props

    return (
        <form className='formInput' onSubmit={handleSubmit}>
            <label htmlFor="taskInput"></label>
            <input required type="text" value={formInput} onChange={handleChange}/>
            <button className="btn-add" type="submit" alt="Add task">Make QR code<i className="fa-solid fa-plus fa-3x"></i></button>
        </form>
    );
}

export default FormURL;






// const FormURL = () => {
//   const [url, setUrl] = useState("");

//   console.log();

//   return (
//     <>
//       <div className="container">
//         <h2>Create a QR image</h2>
//         <div>Write the link you want to create as a QR image!</div>
//         <form className="url-form">
//           <label>Task</label>
//           <input
//             type="text"
//             value={url}
//             required
//             onChange={(e) => setUrl(e.target.value)}
//           />
//           <button type="submit"> Create </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default FormURL;
