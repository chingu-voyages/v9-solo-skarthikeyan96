import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Row, Col, Card } from "antd";
import { Icon } from "react-icons-kit";
import { film } from "react-icons-kit/fa/film";
import "./styles.css";
import Meta from "antd/lib/card/Meta";

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { Header, Content, Sider } = Layout;
        return (<Layout>
            <Header className="header">
                <Icon
                    size={32}
                    icon={film}
                    style={{ color: "#ffffff", float: "left" }}
                />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: "64px", fontSize: "1.2em" }}
                >
                    <Menu.Item key="1">React Movie</Menu.Item>
                </Menu>
            </Header>
            <Content className="content">
                <div id="main-poster">
                    <img src="https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg" alt="Poster" />
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                            <Row>
                {
                    this.props.movie.map((movie) => {
                        return(
                            <Col span={6} key={movie.id}>

                                    <Card title={movie.title}
                                    hoverable
                                     style={{ width: 240 }}
                                    cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />}
                                    bordered={false}>
                                    <Meta></Meta>
                                    {/* <p>{movie.overview}</p> */}
                                    </Card>
                                <br/>
                                </Col>
                                
                            
                        );
                    })
                }
                
                </Row>
            </div>
            </Content>
        </Layout>
        )
    }
}
export default Main;