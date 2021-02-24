import './CreatePageStyle.css'

function CreatePageSection() {
    return (
        <div>
            <div className="formContainer">
                <form>
                    책 제목
                    <div className="titleContainer">
                        <input type="text" name="title" placeholder="title"/>
                    </div>
                    소개
                    <div className="bookContentsContatiner">
                        <textarea className="bookContentsArea"></textarea>
                    </div>
                    <div className="submitbutton">
                        <input type="submit" value="새기기!"/>
                    </div>
                </form>                
            </div>

        </div>
    );
}

export default CreatePageSection