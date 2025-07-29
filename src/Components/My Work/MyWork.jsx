import './MyWork.css'
import theme from "../../assets/Untitled design.png";
import mywork_data from "../../Utils/mywork_data"

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme} alt="" height={"120px"}/>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            // The key prop should be on the outermost element of the mapped list
            <div className='show-more' key={index}>
              <img
                src={work.w_img}
                onClick={() => {
                  if (work.w_url) {
                    window.location.href = work.w_url;
                  }
                }}
                alt=""
                height={"200px"}
              />
              <p onClick={() => {
                  if (work.w_url) {
                    window.location.href = work.w_url;
                  }
                }}>Live Demo</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyWork;