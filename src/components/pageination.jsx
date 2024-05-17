import _ from "lodash";
const PageInation = ({pages , setPage , activePage})=>{
    return (
        <nav>
            <ul className="pagination d-flex justify-content-center mt-5" dir="rtl">
                <li className="page-item">
                    <a href="#" className="page-link">
                        قبلی
                    </a>
                </li>

                <li className="page-item">
                    <a href="#" className="page-link">
                        بعدی
                    </a>
                </li>
            </ul>
        </nav>
    )
}
export default PageInation;