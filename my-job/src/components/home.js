import React from 'react'

const Home = () => {
    return (
            <div className="home-container">
                <div className="avatar-img">
                    <img src="http://101.201.235.37/img/wangyu.jpg" className="avatar" />
                </div>
                <div className="home-info">
                    <p className="my-name">王宇</p>
                    <p className="my-word">热爱编程，代码强迫症患者。</p>
                    <p className="my-profession">前端开发工程师</p>
                    <a href="mailto:1479132837@qq.com" target="_blank" className="my-email">1195543531@qq.com</a>
                </div>
            </div>
        )
}

export default Home