
import React from 'react'
import Logo from '../../images/korea1.jpg'

const Navbar = () => {
    
    
    return (
        <div>
            <div className="container-post">
                <div className="wrapper-post">
                    <div className="wrapper-home-title">
                        <div className="home">Home ></div>
                        <div className="title">Title</div>
                    </div>
                    <div className="wrapper-edit-post">
                        <div className="edit-post">Edit Post</div>
                        <div className="date-post"> Date</div>
                        <div className="title-post">Title : fdafdas fdafda fdafdsafda dfsafdasfsafdsaf afdsa fdsafds afd sa saf sdaewqewqewqewqewqe ewqewqewqs. </div>
                        <div className="image-post"><img alt="" src={Logo} /></div>
                        <div className="postcontent"> loremf fdafdjda ljkfdakljfdaj nlafdjlsakfdaj fdjasfdsajl fjdlsafdsa  fjlfdaslfjdas lfdsajfldasfjl dsaljfdas ljffdklsa jfdsa jl lafjlsfa jfda ljdd dsalfjd  <br/> <br />asfdlsajl fdajfkldasfl sjfdl ajsf dasfasjlf jfdsaf fdsajl fafjl fdsaj. fdasf r erw rlj rewq lj ljrew[wet joeq jprerwq jewrowq jfdsapj jrewq mew ijt[hfdspj jewrwo rewrew jl  ljsjafdjs ajrew  jlrew j ewreareaw rewr rewr rewr  fkldsajl  </div>
                    </div>
                    <div className ="wrapper-comment">
                        <div className="comment-title">COMMENT</div>  
                            <div className="comment-bg">
                                <div className="comment-content">loremf fdafdjda ljkfdakljfdaj nlafdjlsakfdaj fdjasfdsajl fjdlsafdsa  fjlfdaslfjdas lfdsajfldasfjl dsaljfdas ljffdklsa jfdsa jl lafjlsfa jfda ljdd dsalfjd  <br/> <br />asfdlsajl fdajfkldasfl sjfdl ajsf dasfasjlf jfdsaf fdsajl fafjl fdsaj. fdasf r erw rlj rewq lj ljrew[wet joeq jprerwq jewrowq jfdsapj jrewq mew ijt[hfdspj jewrwo rewrew jl  ljsjafdjs ajrew  jlrew j ewreareaw rewr rewr rewr  fkldsaj</div>        
                                <div className="comment-date">3 months ago</div>
                            </div>
                    </div>
                    <div className ="wrapper-add-comment">
                        <input type="textArea"></input>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
