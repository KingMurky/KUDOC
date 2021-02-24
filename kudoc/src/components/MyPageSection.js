import { Link } from "react-router-dom";
function MyPageSection() {
    return (
        <section>
            <div>
                자취
                <Link className="tocreate" to="/mypage/create">새기다</Link>
            </div>
        </section>
    )
}

export default MyPageSection