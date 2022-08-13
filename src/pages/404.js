import React from "react";
import theme from "theme";
import { Theme, Image, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Help for you — Healthcare without the system
			</title>
			<meta name={"description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:title"} content={"Help for you — Healthcare without the system"} />
			<meta property={"og:description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/OGimage.png?v=2021-09-21T16:25:40.647Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon.svg?v=2021-09-21T16:18:29.306Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon270.svg?v=2021-09-21T16:18:07.731Z"} />
			<meta name={"msapplication-TileColor"} content={"#000848"} />
		</Helmet>
		<Image
			position="absolute"
			bottom="auto"
			md-width="600px"
			md-top="300px"
			lg-right="-200px"
			lg-top="0px"
			src="https://uploads.quarkly.io/6123949e957019001e284458/images/backgroung-hero.svg?v=2021-09-21T22:07:12.314Z"
			right="0px"
			top="130px"
			z-index="1"
		/>
		<Section background="linear-gradient(264.47deg, #000848 29.39%, #000848 93.49%)" padding="36px 0 80px 0" quarkly-title="HeroBlock">
			<Override
				slot="SectionContent"
				md-z-index="7"
				flex-direction="row"
				position="relative"
				z-index="9"
				md-flex-wrap="wrap"
			/>
			<Box
				empty-border-width="1px"
				align-items="flex-start"
				md-width="100%"
				display="flex"
				flex-direction="column"
				empty-border-color="LightGray"
				width="70%"
				justify-content="center"
				padding="0px 180px 0px 0px"
				lg-padding="0px 90px 0px 0px"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-min-width="64px"
				md-padding="0px 0px 0px 0px"
			>
				<Text
					letter-spacing="1%"
					lg-text-align="left"
					lg-font="normal 700 40px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 28px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="--headline1"
					color="--white"
					sm-font="normal 500 30px/1.2 &quot;Inter&quot;, sans-serif"
				>
					404
				</Text>
				<Text
					font="--base"
					color="--grey"
					text-transform="uppercase"
					lg-text-align="left"
					lg-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 8px 0px"
					lg-margin="0px 0px 8px 0px"
					sm-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					letter-spacing="0.1em"
				>
					CHECK BACK LATER #error 404
				</Text>
				<Text
					opacity="0.7"
					font="--base"
					letter-spacing="0.05em"
					lg-text-align="left"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					color="--white"
				>
					Pardon the inconvenience. Our team is working hard to make this experience much more enjoyable.
				</Text>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				display="flex"
				md-width="100%"
				empty-border-width="1px"
				empty-border-style="solid"
				width="30%"
				align-items="center"
				justify-content="flex-end"
				md-order="-1"
			>
				<Image
					lg-max-height="400px"
					width="100%"
					max-height="450px"
					md-margin="0px 0px 30px 0px"
					src="https://uploads.quarkly.io/6123949e957019001e284458/images/logos_foundation.svg?v=2021-10-05T09:15:03.700Z"
					lg-position="relative"
					lg-left="-5px"
					max-width="100%"
				/>
			</Box>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6123949e957019001e284456"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});