import React from "react";
import moment from 'moment';
import { Button, Form, Input, DatePicker, message } from 'antd';
import { useMutation } from "@apollo/client";
import styles from "./styles.module.css";

import { ADD_EVENT } from "../../pages/Home/queries";

function HeaderForm() {
    const [saveEvent, { loading }] = useMutation(ADD_EVENT);


    const handleSubmit = async (values) => {
        try {
          message.loading('Saving...', 8);
          await saveEvent({
            variables: {
              data: {
                title: values.title,
                desc: values.description,
                user_id: values.userid,
                date: moment(values.datepicker).format('YYYY-MM-DD'),
              },
            },
          });
          message.destroy();
          message.success('Event saved!', 4);
        } catch (e) {
          console.log(e);
          message.destroy();
          message.error('Event not saved!', 6);
        }
      };

  return (
    <Form name="basic" initialValues={{ remember: true }} onFinish={handleSubmit} autoComplete="off">
      <Form.Item name="title">
        <Input disabled={loading} placeholder="Title" size="large" />
      </Form.Item>

      <Form.Item name="description">
        <Input.TextArea disabled={loading} rows={3} placeholder="Description" size="large" />
      </Form.Item>

      <Form.Item name="datepicker">
        <DatePicker disabled={loading} size="large" />
      </Form.Item>

      <Form.Item name="userid">
        <Input disabled={loading} placeholder="User ID" size="large" />
      </Form.Item>

      <Form.Item className={styles.buttons} size="large">
        <Button loading={loading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default HeaderForm;
