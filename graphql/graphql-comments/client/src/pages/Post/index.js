import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST } from "./queries";
import Loading from "components/Loading";

import styles from "./styles.module.css";
import { Typography, Image } from "antd";
const { Title } = Typography;

function Post() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  const { post } = data;

  return (
    <div>
      <Title level={3}>{post.title}</Title>
      <Image width={200} src={post.cover} />
      <div className={styles.description}>{post.short_description}</div>
    </div>
  );
}

export default Post;
