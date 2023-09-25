import { Table, Typography } from 'antd';
import { PublicApiEntry } from '../models/PublicApiEntry';

const { Title } = Typography;

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Auth',
    dataIndex: 'auth',
  },
  {
    title: 'HTTPS',
    dataIndex: 'https',
  },
  {
    title: 'CORS',
    dataIndex: 'cors',
  },
  {
    title: 'Category',
    dataIndex: 'category',
  },
];

const PublicApisTable = () => {
  const entries: PublicApiEntry[] = [
    {
      title: 'test',
      description: 'test d',
      auth: 'test a',
      https: false,
      cors: 'yes',
      category: 'test c',
    }
  ]
  return (
    <>
      <Title style={{ marginTop: 0 }} level={4}>Public APIs</Title>
      <Table columns={columns} rowKey={'title'} dataSource={entries} />
    </>
  )
}
export default PublicApisTable;