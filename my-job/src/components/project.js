import React from 'react'
import { Timeline, Modal } from 'antd'

export default class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            src: ''
        }
        this.showModal = this.showModal.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    showModal(e) {
        this.setState({
            visible: true,
            src: e.currentTarget.getAttribute("data-src")  //兼容IE
        })
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div className="project-container">
                <h1 className="project-title">项目经验</h1>
                <div className="project-content">
                    <Timeline pending={<a href="" className="item-title"></a>}>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    在线个人简历（2017.2）
                                    <a className="item-link" href="" target="_blank">
                                        <i className="iconfont icon-link"></i>
                                    </a>

                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        设计优雅，内容完善的静态单页面（SPA）简历页面，使用React、React Router、Ant Design等
                                        库和框架设计，语法采用ES6、ES7，运用webpack等模块打包工具进行编译打包。
                                    </div>
                                    <div className="item-img">
                                        <img src="http://101.201.235.37/img/small.png"
                                            data-src="http://101.201.235.37/img/shouye.png"
                                            onClick={this.showModal} />
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    微信小程序--模仿猫眼电影（2017.1-2017.2）
                                    <a className="item-link"
                                        href="https://github.com/swhz/wechat-small-program/tree/master/weapp-film"
                                        target="_blank">
                                        <i className="iconfont icon-link"></i>源代码
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        具有猫眼电影官方小程序基本功能（受限于api，无订票、选座、登陆等功能）的微信小程序
                                        （早于微信小程序上线），界面设计合理，交互效果良好。
                                    </div>
                                    <div className="item-img">
                                        <img src="http://swhzhuster.xin/images/my-CV/maoyan1-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/maoyan1.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/maoyan2-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/maoyan2.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/maoyan3-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/maoyan3.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/maoyan4-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/maoyan4.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/maoyan5-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/maoyan5.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/maoyan6-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/maoyan6.png"
                                            onClick={this.showModal} />
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    微信小程序--简单商城（2016.12）
                                    <a className="item-link" href="" target="_blank">
                                        <i className="iconfont icon-link"></i>
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        模仿爱拼宝宝app的商城项目（受限于api，功能比较简单），界面设计参照
                                        官方app，交互效果良好。
                                    </div>
                                    <div className="item-img">
                                        <img src="http://swhzhuster.xin/images/my-CV/aipin1-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/aipin1.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/aipin2-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/aipin2.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/aipin3-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/aipin3.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/aipin4-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/aipin4.png"
                                            onClick={this.showModal} />
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>


                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    团队项目--尚宜家O2O项目（2016.02--2016.6）
                                    <a className="item-link" href="#" target="_blank">
                                        <i className="iconfont icon-link"></i>
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        尚宜家是一个洗护O2O项目，运用移动web技术开发，功能涉及洗衣、洗鞋、奢侈品养护等，
                                        用户可以通过移动终端（微信、APP）下单。（项目目前已下线，查看效果请点击Demo）
                                    </div>
                                    <div className="item-img">
                                        <img src="http://swhzhuster.xin/images/my-CV/shangyijia1-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/shangyijia1.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/shangyijia2-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/shangyijia2.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/shangyijia3-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/shangyijia3.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/shangyijia4-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/shangyijia4.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/shangyijia5-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/shangyijia5.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/shangyijia6-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/shangyijia6.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/shangyijia7-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/shangyijia7.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/shangyijia8-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/shangyijia8.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/shangyijia9-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/shangyijia9.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/shangyijia10-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/shangyijia10.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/shangyijia11-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/shangyijia11.png"
                                            onClick={this.showModal} />
                                        <img src="http://swhzhuster.xin/images/my-CV/shangyijia12-small.png"
                                            data-src="http://swhzhuster.xin/images/my-CV/shangyijia12.png"
                                            onClick={this.showModal} />
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>


                    </Timeline>
                </div>
                <Modal title="" footer="" width="80%"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}>
                    <div className="big-img">
                        <img src={this.state.src} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                    </div>
                </Modal>
            </div>
        )
    }
}
