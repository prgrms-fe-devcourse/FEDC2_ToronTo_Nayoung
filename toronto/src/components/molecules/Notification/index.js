import styled from 'styled-components';
import { StyledLink, Avatar, Text } from '@/components/atoms';
const Notification = () => {
  // TODO: 필요한 파라미터 정리
  //TODO: seen key가 false일때
  return (
    <Wrapper>
      {/* TODO: 해당 댓글이나 좋아요의 포스트Id의 게시물로 이동 */}
      <StyledLink to='/'>
        <NotificationWrapper>
          <AvatarWrapper>
            <Avatar src='https://picsum.photos/200' size={50} />
          </AvatarWrapper>
          <TextWrapper>
            <div>
              <Text>
                '유저 이름'님이 '알림 타입(댓글, 좋아요에 대한 처리)' '객체'
                게시물에 '댓글 | 좋아요'이/가 달렸습니다| 눌렀습니다.
              </Text>
            </div>
            <div>
              <Text color='#2f66d2'>'updatedAt'에 업데이트 되었습니다.</Text>
            </div>
          </TextWrapper>
        </NotificationWrapper>
      </StyledLink>
    </Wrapper>
  );
};

export default Notification;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`;
