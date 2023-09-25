import { Layout, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import './App.css';
import PublicApisTable from './component/PublicApisTable';

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          Public APIs
        </div>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <PublicApisTable />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Public APIs ©2023 Created by SRatna
      </Footer>
    </Layout>
  );
};
export default App;