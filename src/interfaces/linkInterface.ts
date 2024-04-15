import { IconType } from 'react-icons';

type ReactIcon = IconType;

export default interface LinkInterface {
	name: string;
	nav: { navName: string, icons: ReactIcon ,link:string}[];
	
}


