import { Table, Typography } from 'antd';
import { PublicApiEntry } from '../models/PublicApiEntry';
import useSWR, { Fetcher } from 'swr'

const { Title } = Typography;

const columns = [
  {
    title: 'Title',
    dataIndex: 'API',
  },
  {
    title: 'Description',
    dataIndex: 'Description',
  },
  {
    title: 'Auth',
    dataIndex: 'Auth',
  },
  {
    title: 'HTTPS',
    dataIndex: 'HTTPS',
    render: (https: boolean) => https ? 'Yes' : 'No'
  },
  {
    title: 'CORS',
    dataIndex: 'Cors',
  },
  {
    title: 'Category',
    dataIndex: 'Category',
  },
  {
    title: 'Link',
    dataIndex: 'Link',
    render: (link: string) => <a href={link}>{link}</a>
  },
];

type Response = {
  count: number;
  entries: PublicApiEntry[]
}

const fetcher: Fetcher<Response, string> = (url: string) => fetch(url).then((res) => res.json());

const PublicApisTable = () => {
  const { data, error, isLoading } = useSWR('https://api.publicapis.org/entries', fetcher)

  return (
    <>
      <Title style={{ marginTop: 0 }} level={4}>Public APIs</Title>
      {!error ? (
        <Table
          loading={isLoading && { tip: 'Loading...' }}
          columns={columns}
          rowKey={({ API, Link }) => `${API}-${Link}`}
          dataSource={data?.entries}
        />
      ) : (
        <>Oh no, something went wrong!</>
      )}
    </>
  )
}
export default PublicApisTable;