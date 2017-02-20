import React from 'react'
import { Modal } from 'antd'

export default class Contact extends React.Component {
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
            src: e.currentTarget.getAttribute("data-src") //兼容IE
        })
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div className="contact-container">
                <h1 className="contact-title">联系我</h1>
                <div className="contact-content">
                    <div className="contact-main">
                        <div className="main-item" 
                        data-src="http://101.201.235.37/img/weixin.png"
                        onClick={this.showModal}>
                            <div className="item-icon">
                                <i className="iconfont icon-weixin"></i>
                            </div>
                            <div className="item-content">
                                微信:1195543531
                            </div>
                        </div>
                        <div className="main-item" 
                        data-src="http://101.201.235.37/img/QQ.pgn"
                        onClick={this.showModal}>
                            <div className="item-icon">
                                <i className="iconfont icon-qq"></i>
                            </div>
                            <div className="item-content">
                                QQ:1195543531
                            </div>
                        </div>
                        <a href="mailto:1479132837@qq.com" target="_blank" className="main-item">
                            <div className="item-icon">
                                <i className="iconfont icon-email"></i>
                            </div>
                            <div className="item-content">
                                邮箱:195543531@qq.com
                            </div>
                        </a>
                    </div>

                </div>
                 <Modal title="" footer="" width="30%"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}>
                    <div className="big-img">
                        <img src={this.state.src} style={{ maxWidth: '100%' }} />
                    </div>
                </Modal>
            </div>
        )
    }
}
