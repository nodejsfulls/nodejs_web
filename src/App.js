import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Card, Col, Row } from 'antd';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;


class App extends Component {
  render() {
    return (
      <Layout className="layout" >
        <Header style={{ backgroundColor: "#fff" }}>
          <div className="logo" />
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '30px 50px' }}>
          <h2>Node.js 基础</h2>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Row gutter={16}>
              <Col span={6}>
              <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://img4.sycdn.imooc.com/szimg/5b8510930001ab7605400300.jpg" />}
                >
                  <Meta
                    title="Node.js基础教程（0）"
                    description="232次观看"
                  />
                </Card>
              </Col>
              <Col span={6}>
              <Card
                  hoverable
                  style={{ width: 240 }}
                  
                  cover={<img alt="example" src="https://img1.sycdn.imooc.com/5b86566a0001d31106000338-240-135.jpg" />}
                >
                  <Meta
                    title="Node.js基础教程（1）"
                    description="232次观看"
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://img4.sycdn.imooc.com/szimg/5b8510930001ab7605400300.jpg" />}
                >
                  <Meta
                    title="Node.js基础教程（2）"
                    description="232次观看"
                  />
                </Card>
              </Col>
              <Col span={6}>
              <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://img4.sycdn.imooc.com/szimg/5b8510930001ab7605400300.jpg" />}
                >
                  <Meta
                    title="Node.js基础教程（3）"
                    description="232次观看"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            
            <Breadcrumb.Item>Nodejs web自动化</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Row gutter={16}>
              <Col span={6}>
              <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://img4.sycdn.imooc.com/szimg/5b8510930001ab7605400300.jpg" />}
                >
                  <Meta
                    title="Node.js基础教程（0）"
                    description="232次观看"
                  />
                </Card>
              </Col>
              <Col span={6}>
              <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://img4.sycdn.imooc.com/szimg/5b8510930001ab7605400300.jpg" />}
                >
                  <Meta
                    title="Node.js基础教程（1）"
                    description="232次观看"
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://img4.sycdn.imooc.com/szimg/5b8510930001ab7605400300.jpg" />}
                >
                  <Meta
                    title="Node.js基础教程（2）"
                    description="232次观看"
                  />
                </Card>
              </Col>
              <Col span={6}>
              <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://img4.sycdn.imooc.com/szimg/5b8510930001ab7605400300.jpg" />}
                >
                  <Meta
                    title="Node.js基础教程（3）"
                    description="232次观看"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            
            <Breadcrumb.Item>Nodejs-手机自动化</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Row gutter={16}>
              <Col span={6}>
              <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://img4.sycdn.imooc.com/szimg/5b95cd0e0001e8c406000338.jpg" />}
                >
                  <Meta
                    title="Node.js基础教程（0）"
                    description="232次观看"
                  />
                </Card>
              </Col>
              <Col span={6}>
              <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://img4.sycdn.imooc.com/szimg/5b8510930001ab7605400300.jpg" />}
                >
                  <Meta
                    title="Node.js基础教程（1）"
                    description="232次观看"
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://img4.sycdn.imooc.com/szimg/5b8510930001ab7605400300.jpg" />}
                >
                  <Meta
                    title="Node.js基础教程（2）"
                    description="232次观看"
                  />
                </Card>
              </Col>
              <Col span={6}>
              <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://img4.sycdn.imooc.com/szimg/5b8510930001ab7605400300.jpg" />}
                >
                  <Meta
                    title="Node.js基础教程（3）"
                    description="232次观看"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
