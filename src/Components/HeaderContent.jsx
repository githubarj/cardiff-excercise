import header from '../Styles/header.module.css'
const HeaderContent = () => {
    return (
      <div className={header.container}>
        <img className={header.logo} src="../../cardiff-university-vector-logo.svg" alt="logo" />
        <h1>
            Cardiff University
        </h1>
      </div>
    );
}

export default HeaderContent