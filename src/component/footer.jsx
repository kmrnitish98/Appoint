import styles from './footer.module.css';
export  function Footer(){
    return(
        <>
          <div className=" bg-gray-300 p-2 ">
             <footer className=" flex flex-col justify-between items-center md:flex-row text-sm gap-4">
                 <span className="bi bi-c-circle fw-bold md:flex-wrap"> 2025-@nitish_Todo. All rights reserved.</span>
                 <span className={styles.linkD}>
                    <a href="#" >Term</a>
                    <a href="#" >Privancy</a>
                    <a href="#" >Cookies</a>
                 </span>
                 <span>
                    <span className="bi bi-translate text-2xl me-2"></span>
                    <select name='language' className='bg-gray-800 text-white rounded border-none focus:outline-none px-2 py-1'>
                        <option value="English">English</option>
                        <option value="Hindi">हिंदी</option>
                    </select>
                 </span>
             </footer>
          </div>
        </>
    );
}
