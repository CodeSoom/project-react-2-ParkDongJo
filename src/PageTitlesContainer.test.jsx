import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import PageTitlesContainer from './PageTitlesContainer';

import { page1, page1Titles } from './../fixtures';

describe('PageTitlesContainer', () => {
  const extractSubTitlesInPage = jest.fn();
  const getPageTitles = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      book: {
        openedPage: page1
      }
    }));

    extractSubTitlesInPage.mockImplementation((pageText) => {
      const titles = pageText.match(/##\D+?\n/gm);

      return titles.map(title => {
        return title.replace(/(##\s|##)/g, '')
                    .replace(/\n/g, '');
      });
    });

    getPageTitles.mockImplementation((subTitlesInPage) => {
      return subTitlesInPage.map((title, index) => ({
        id: index,
        title: title,
        cssId: `#${title.replace(/\s/g, '-')}`
      }))
    })
  });

  function renderPageTitlesContainer() {
    return render(
      <PageTitlesContainer/>,
    );
  }

  it('render container', () => {
    const { getByText } = renderPageTitlesContainer();

    page1Titles.forEach(({ title }) => {
      expect(getByText(title)).not.toBeNull();
    });
  });

  context('when run extractSubTitleInPage()', () => {
    it('return matchedSubTitles',() => {
      const subTitlesInPage = extractSubTitlesInPage(page1.text);

      expect(subTitlesInPage).not.toBeNull();
      expect(subTitlesInPage[0]).toBe('일단 기다려봅시다')
    });
  });

  context('when run getPageTitles()', () => {
    it('return pageTitles',() => {
      const subTitlesInPage = page1Titles.map(({ title }) => title)
      const pageTitles = getPageTitles(subTitlesInPage);

      expect(pageTitles[0].cssId).toBe(`${page1Titles[0].cssId.replace(/\s/g, '-')}`);
    });
  });
});
