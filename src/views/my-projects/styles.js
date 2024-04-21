import styled from 'styled-components'

export const MyProjectsContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media screen and (max-width: 1350px) {
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    gap: 3rem;
  }
`;

export const ProjectModal = styled.dialog`
  position: fixed;
  top: 15%;
  left: 15%;
  height: 70%;
  width: 70%;
  border: none;
  border-radius: 4px;
  background: #22151e;
  color: white;

  @media screen and (max-width: 700px) {
    top: 10%;
    left: 5%;
    height: 80%;
    width: 90%;
  }

  &::backdrop {
    background: #11050dc9;
    backdrop-filter: blur(16px);
    cursor: pointer;
  }

  & > img {
    width: 100%;
    height: 40%;
    object-fit: cover;
  }

  & > button {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .modal-body {
    padding: 20px;
    height: calc(60% - 60px);
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;

    .title {
      display: flex;
      gap: 5px 20px;
      flex-wrap: wrap;
      align-items: baseline;
    }

    .links {
      margin-top: auto;
      display: flex;
      gap: 20px;
    }
  }
`