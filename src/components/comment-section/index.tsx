import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Comment, Form, Header, Icon } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';



import { RootState } from '../../redux/reducers';

interface JsonTS {
  author: string;
  userImage: string;
  message: string;
  answer: any;
  id: number;
  date: string;
  timeStamp: string;
}

interface Params {
  id: any;
}

const CommentSection: React.FC = () => {
  const [newComment, setNewComment] = useState('');
  const [newClick, setNewClick] = useState(true);
  const [newCommentsLoad, setCommentsLoad] = useState([]);
  const [productOwner, setProductOwner] = useState(false);

  const user = useSelector(({ session }: RootState) => session.currentUser);
  const token = useSelector(({ session }: RootState) => session.token);
  const { id } = useParams<Params>();

  console.log("user: ", user, "token:", token);

  const urlGet = `https://capstone-q2.herokuapp.com/comments?pageId=${id}`;
  const urlPost = `https://capstone-q2.herokuapp.com/comments`;
  const urlOwner = `https://capstone-q2.herokuapp.com/products/${id}`;

  useEffect(() => {
    console.log("Entrou useEffect")
    axios
      .get(urlGet)
      .then(({ data }) => {

        setCommentsLoad(data);
      })
      .catch((err) => console.log('Error: ', err));
  }, [newClick]);

  useEffect(() => {
    axios
      .get(urlOwner)
      .then(({ data: { userId } }) => {
        userId === user.id ? setProductOwner(true) : setProductOwner(false)
      })
  }, [productOwner]);

  const handleOnChange = (evt: any): void => {
    //console.log(evt.target.value);
    setNewComment(evt.target.value);
  }

  const handleOnClick = (evt: any): void => {
    evt.preventDefault();
    console.log(newComment);
    const values = {
      author: user.name,
      userId: user.id,
      pageId: parseInt(id),
      userImage: user.userImage ||
        'https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=630&q=80',
      message: newComment,
      date: new Date().toLocaleDateString(),
      timeStamp: new Date().toLocaleTimeString(),
      answer: 'none'
    };

    axios
      .post(urlPost, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res)).then(() => {
        setNewClick(!newClick);
        setNewComment('');
      })
      .catch((err) => console.log('Erro: ', err));
  };

  return (
    <Comment.Group size='large'>
      <Header as="h3" dividing>
        Perguntas
      </Header>
      {newCommentsLoad.map(({ author, userImage, message, answer, date, timeStamp }: JsonTS, key: number) => (
        <Comment key={key}>
          <Comment.Avatar src={userImage} />
          <Comment.Content>
            <Comment.Author as="a">{author}</Comment.Author>
            <Comment.Metadata>
              {date && <div>{date} at {timeStamp}</div> || <div>random meta</div>}
            </Comment.Metadata>
            <Comment.Text>{message}</Comment.Text>
            <Comment.Actions>
              {productOwner ?
                <Comment.Action>Reply</Comment.Action>
                : <Comment.Action><Icon name='thumbs up' /></Comment.Action>}
            </Comment.Actions>
          </Comment.Content>
          {answer !== 'none' && (
            <Comment.Group size='large'>
              <Comment>
                <Comment.Avatar src={answer.userImage} />
                <Comment.Content>
                  <Comment.Author as="a">{answer.author}</Comment.Author>
                  <Comment.Metadata>
                    {answer.date && <div>{date} at {answer.timeStamp}</div> || <div>random meta</div>}
                  </Comment.Metadata>
                  <Comment.Text>{answer.message}</Comment.Text>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          )}
        </Comment>
      ))}
      <Form reply onSubmit={handleOnClick}>
        <Form.TextArea
          placeholder="Faça uma pergunta"
          style={{ minHeight: 100 }}
          onChange={(evt) => handleOnChange(evt)}
          value={newComment}
        />
        <Button content="Comentar" labelPosition="left" icon="edit" primary style={{ backgroundColor: "#8d70fb" }} />
      </Form>
    </Comment.Group>
  );
};

export default CommentSection;
