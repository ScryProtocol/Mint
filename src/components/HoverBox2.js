import React, { useState } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Image, Text, Icon } from '@quarkly/widgets';
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
	'Image': {},
	'image': {
		kind: 'Image'
	},
	'Link :hover': {
		kind: 'Link'
	},
	'image': {
		kind: 'Image',
		width: '48px',
		height: '48px'
	},
	'Before image': {
		kind: 'Image',
		width: '48px',
		height: '48px'
	},
	'Before image :default': {
		kind: 'Image',
		width: '48px',
		height: '48px'
	},
	'Before image :hover': {
		kind: 'Image',
		width: '48px',
		height: '48px'
	},
	'Before Text': {
		kind: 'Text',
		props: {
			children: 'Text',
			display: 'inline-block',
			color: '--dark'
		}
	},
	'Before Text2': {
		kind: 'Text',
		props: {
			children: 'Text',
			color: '--ingigo'
		}
	},
	'Before Text2 :default': {
		kind: 'Text',
		props: {
			color: '--ingigo'
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
			      
			<Text {...override('Before Text2', `Before Text2 :${isHover ? 'hover' : 'default'}`)} />
			      
			<Image {...override('Image', `Image :${isHover ? 'hover' : 'default'}`)} />
			        
			<Text {...override('Before Text', `Before Text :${isHover ? 'hover' : 'default'}`)} />
			    
		</Box>
		      
	</Box>;
};

Object.assign(CardHoverButton, {
	overrides
});
export default CardHoverButton;