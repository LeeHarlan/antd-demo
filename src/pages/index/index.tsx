import React, { useState } from 'react';
import { Button } from 'antd';
import ProTable from '@ant-design/pro-table';
import type { RequestData } from '@ant-design/pro-table';
import type { UserItemData } from './types';
import dynamicComponent from "@/utils/dynamicComponent";

const HelloWorld = dynamicComponent( { loader: () => import('./components/HelloWorld'), loading: <div>Loading ...</div>});

export default function IndexPage() {
  const [count, setCount] = useState(0);

  const columns = [
    { title: '姓名', dataIndex: 'name' },
    { title: '账号', dataIndex: 'username' },
    { title: '年龄', dataIndex: 'age' },
    { title: '性别', dataIndex: 'gender' },
    { title: '操作', dataIndex: 'id', valueType: 'option' },
  ];

  const tableProps = {
    rowKey: 'id',
    columns,
    request() {
      return new Promise<Partial<RequestData<UserItemData>>>((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            total: 120,
            data: [
              {
                id: '1',
                name: '张三1',
                username: 'zhangsan1@qq.com',
                age: 12,
                gender: '男',
              },
              {
                id: '2',
                name: '张三2',
                username: 'zhangsan2@qq.com',
                age: 32,
                gender: '女',
              },
              {
                id: '3',
                name: '张三3',
                username: 'zhangsan3@qq.com',
                age: 23,
                gender: '男',
              },
              {
                id: '4',
                name: '张三4',
                username: 'zhangsan4@qq.com',
                age: 42,
                gender: '男',
              },
              {
                id: '5',
                name: '张三5',
                username: 'zhangsan5@qq.com',
                age: 21,
                gender: '女',
              },
              {
                id: '6',
                name: '张三6',
                username: 'zhangsan6@qq.com',
                age: 15,
                gender: '男',
              },
              {
                id: '7',
                name: '张三7',
                username: 'zhangsan7@qq.com',
                age: 23,
                gender: '男',
              },
            ],
          });
        }, 1000);
      });
    },
  };

  return (
    <div>
      <Button type="primary" onClick={() => setCount((prev) => prev + 1)}>
        count: {count}
      </Button>
      <HelloWorld />
      <ProTable {...tableProps} />
    </div>
  );
}
