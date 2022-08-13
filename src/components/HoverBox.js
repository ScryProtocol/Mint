import React, { useState } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Link, Text, Icon } from '@quarkly/widgets';
import { MdFace } from "react-icons/md";
const overrides = {
	'Link': {
		kind: 'Link'
	},
	'Link :default': {
		kind: 'Link'
	},
	'Icon': {
		kind: 'Icon'
	},
	'Box': {},
	'box': {
		kind: 'box'
	},
	'Icon': {
		category: "md",
		icon: MdFace,
		size: "48px"
	},
	'image': {
		kind: 'Image'
	},
	'Link :hover': {
		kind: 'Link'
	},
	'image': {
		kind: 'Image',
		width: '7px',
		height: '12px'
	},
	'Before image': {
		kind: 'Image',
		width: '7px',
		height: '12px'
	},
	'Before image :default': {
		kind: 'Image',
		width: '7px',
		height: '12px'
	},
	'Before image :hover': {
		kind: 'Image',
		width: '7px',
		height: '12px'
	},
	'Before Text': {
		kind: 'Text',
		props: {
			children: 'Text',
			display: 'inline-block',
			color: 'red'
		}
	},
	'Before Text2': {
		kind: 'Text',
		props: {
			children: 'Text',
			color: '#fff'
		}
	},
	'Before Text2 :default': {
		kind: 'Text',
		props: {
			color: '#fff'
		}
	},
	'Before Text2 :hover': {
		kind: 'Text',
		props: {
			color: '#fff'
		}
	}
};

const CardHoverButton = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, {});
	const [isHover, setHover] = useState(false);

	const onCardEnter = () => {
		setHover(true);
	};

	const onCardLeave = () => {
		setHover(false);
	};

	return <Box {...rest} onMouseEnter={onCardEnter} onMouseLeave={onCardLeave}>
		  
    
		<Box {...override('Box', `Box :${isHover ? 'hover' : 'default'}`)}>
			      
			{children}
			      
			<Icon {...override('Icon', `Icon :${isHover ? 'hover' : 'default'}`)} />
			      
			<Text {...override('Before Text2', `Before Text2 :${isHover ? 'hover' : 'default'}`)} />
			      
			<Text {...override('Before Text', `Before Text :${isHover ? 'hover' : 'default'}`)} />
			    
		</Box>
		      
	</Box>;
};

Object.assign(CardHoverButton, {
	overrides
});
export default CardHoverButton;