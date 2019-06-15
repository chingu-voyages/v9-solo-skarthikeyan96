import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Row, Col } from "antd";
import { Icon } from "react-icons-kit";
import { film } from "react-icons-kit/fa/film";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: [],
      currentPage: 1
    };
  }
  componentDidMount() {
    
  }
  render() {
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
    return (
      <div className="App">
        <Layout>
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
            <div className="main">
              <Row>
                <Col span={12} />
              </Row>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
