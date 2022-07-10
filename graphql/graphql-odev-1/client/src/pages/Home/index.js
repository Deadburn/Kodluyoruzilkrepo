import { useEffect } from "react";
import { List } from "antd";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { GET_EVENTS, EVENT_SUBSCRIPTION } from "./queries";
import Loading from "components/Loading";

function Home() {
  const { loading, error, data, subscribeToMore } = useQuery(GET_EVENTS);

  useEffect(() => {
    subscribeToMore({
      document: EVENT_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        console.log(subscriptionData);

        return {
          events: [subscriptionData.data.eventCreated, ...prev.events],
        };
      },
    });
  }, [subscribeToMore]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <List
        className="demo-loadmore-list"
        loading={false}
        itemLayout="horizontal"
        //loadMore={loadMore}
        dataSource={data.events}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              //   avatar={<Avatar src={item.user.profile_photo} />}
              title={
                <div className={`${styles.flexion}`}>
                  <Link
                    to={`/event/${item.id}`}
                    className={`${styles.listTitle}`}
                  >
                    {item.title}
                  </Link>
                  <p>{item.date}</p>
                </div>
              }
              description={
                <Link to={`/event/${item.id}`} className={styles.listItem}>
                  {item.desc}
                </Link>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Home;
