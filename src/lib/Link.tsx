import { ReactNode } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '../types';

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    children: ReactNode;
}

const Link = ({ 
    page, 
    selectedPage,
    setSelectedPage, children }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? "text-lime-500" : ""}
    transition duration-500 hover:text-greenblue-500`}
    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}>
        {children}
    </AnchorLink>
  )
}

export default Link