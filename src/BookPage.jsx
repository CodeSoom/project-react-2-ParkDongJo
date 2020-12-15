import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import styled from '@emotion/styled';

import BookContainer from './BookContainer';
import BookTitlesContainer from './BookTitlesContainer';
import PageTitlesContainer from './PageTitlesContainer';

import {
  loadCourse,
  loadPage,
  setIsLoading,
} from './store/bookSlice';

const FIRST_OPENED_COURSE_ID = 1;
const FIRST_OPENED_PAGE_ID = 1;

export default function BookPage({ params }) {
  const dispatch = useDispatch();

  const { bookId } = params || useParams();
  const isLoading = useSelector((state) => state.book.isLoading);

  useEffect(() => {
    dispatch(setIsLoading(true));

    dispatch(loadCourse({ bookId }));
    dispatch(loadPage({
      bookId,
      courseId: FIRST_OPENED_COURSE_ID,
      pageId: FIRST_OPENED_PAGE_ID
    }));
  }, []);

  return (
    <>
      {isLoading ? <div>{"loading..."}</div> : (
        <>
          <WrapperLayout>
            <RightFlexLayout>
              <BookTitlesContainer />
            </RightFlexLayout>
            <MainFlexLayout>
              <BookContainer />
            </MainFlexLayout>
            <LeftFlexLayout>
              <PageTitlesContainer />
            </LeftFlexLayout>
          </WrapperLayout>
        </>
      )}
    </>
  );
};

const WrapperLayout = styled.div({
  maxWidth: '1400px',
  margin: '0 auto',
  paddingTop: '40px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});
  
const RightFlexLayout = styled.div({
  display: 'flex',
  flex: '0 0 240px',
});

const MainFlexLayout = styled.div({
  display: 'flex',
  flex: '1 auto',
});

const LeftFlexLayout = styled.div({
  display: 'flex',
  flex: '0 0 240px',
});
