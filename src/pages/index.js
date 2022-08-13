import React from "react";
import theme from "theme";
import { Theme, Link, Box, Section, Text, Span, Image, Strong, Structure, LinkBox, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FaHeartbeat, FaCommentMedical, FaRegCheckCircle, FaDollarSign } from "react-icons/fa";
import { IoIosWater, IoIosCheckmarkCircleOutline } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
		<Section background="#69b9ff" padding="36px 0 36px 0" quarkly-title="Header">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				width="70%"
				sm-width="50%"
				align-items="center"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Components.QuarklycommunityKitMobileSidePanel md-z-index="9">
					<Override
						slot="Content"
						align-items="center"
						padding="16px 0px 16px 16px"
						md-background="--color-light"
						md-z-index="9"
						md-justify-content="flex-start"
						background="rgba(255, 255, 255, 0)"
						justify-content="center"
					/>
					<Override slot="Children" justify-content="center" display="flex" align-items="center" />
					<Override slot="Button Text" md-display="none" />
					<Override slot="Button Icon" md-color="--white" md-font="36px sans-serif" />
					<Override slot="Cross" md-color="--dark" md-font="36px sans-serif" />
					<Override slot="Wrapper" md-z-index="9" />
					<Box
						display="flex"
						align-items="center"
						justify-content="flex-end"
						md-flex-direction="column"
						md-margin="40px 0px 13px 0px"
						md-font="--headline4"
					>
						<Link
							font="normal 600 18px/1.5 --fontFamily-googleInter"
							text-decoration-line="initial"
							color="--white"
							margin="0px 20px 0px 20px"
							md-margin="0px 0px 13px 0px"
							md-font="--lead"
							md-color="--indigo"
							href="https://scry.finance"
							target="_blank"
						>
							Home
						</Link>
						<Link
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							href="https://app.scry.finance"
							font="--base"
							text-decoration-line="initial"
							hover-opacity="1"
							md-font="--lead"
							md-color="--indigo"
							color="--white"
							margin="0px 20px 0px 20px"
							opacity="0.7"
						>
							Application
						</Link>
						<Link
							color="--white"
							margin="0px 20px 0px 20px"
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							md-font="--lead"
							href="https://docs.scry.finance"
							font="--base"
							text-decoration-line="initial"
							opacity="0.7"
							hover-opacity="1"
							md-color="--indigo"
						>
							Docs
						</Link>
						<Link
							hover-opacity="1"
							md-font="--lead"
							md-color="--indigo"
							font="--base"
							color="--white"
							opacity="0.7"
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							href="https://discord.gg/3Z2qvm9BDg"
							text-decoration-line="initial"
							margin="0px 8px 0px 20px"
						>
							Discord
						</Link>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section
			padding="36px 0 80px 0"
			quarkly-title="HeroBlock"
			md-padding="36px 0 60px 0"
			background="#69b9ff"
			flex-direction="column"
			position="relative"
			align-content="flex-start"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				position="relative"
				z-index="9"
				md-flex-wrap="wrap"
				md-z-index="7"
				display="flex"
				justify-content="center"
			/>
			<Box
				min-height="100px"
				max-width="100%"
				text-align="center"
				align-self="center"
				flex="0 1 auto"
			>
				<Text
					letter-spacing="1%"
					lg-text-align="left"
					lg-font="normal 700 40px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 28px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="normal 700 51px/1.2 --fontFamily-googleInter"
					color="#ffffff"
					sm-font="normal 500 30px/1.2 &quot;Inter&quot;, sans-serif"
					background="#69b9ff"
					border-color="#69b9ff"
				>
					Scry Founder NFT
				</Text>
				<Text margin="0px 0px 0px 0px" color="#ffffff" font="42px --fontFamily-googleKalam" text-align="center">
					<Span
						font="700 42px --fontFamily-googleKalam"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Your Unique, Personal NFT Membership
					</Span>
				</Text>
				<Image
					src="https://uploads.quarkly.io/62f76506f913c500201c9228/images/Black__Gold_Minimal_Real_Estate_Business_Card.gif?v=2022-08-13T08:49:54.623Z"
					display="block"
					position="relative"
					max-width="1000px"
					justify-content="center"
					left="180px"
				/>
				<Box
					lg-margin="32px 0px 0px 0px"
					md-width="100%"
					md-margin="36px 0px 0px 0px"
					display="flex"
					margin="72px 0px 0px 0px"
					align-items="flex-start"
					justify-content="center"
				>
					<Link
						sm-margin="0px 22px 0px 0px"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						href="/login"
						text-decoration-line="initial"
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						sm-padding="15px 13px 15px 13px"
						md-text-align="center"
						lg-margin="0px 32px 0px 0px"
						padding="15px 30px 15px 30px"
						border-radius="10px"
						border-color="rgba(255, 255, 255, 0.3)"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						md-padding="15px 16px 15px 16px"
						hover-color="--primary"
						color="--white"
						margin="0px 44px 0px 0px"
						border-width="1px"
						border-style="solid"
						lg-padding="15px 23px 15px 23px"
						md-width="50%"
						background="--color-primary"
						font="--lead"
						hover-background="--color-white"
					>
						Mint Your Founder NFT
					</Link>
					<Link
						padding="15px 30px 15px 30px"
						font="--lead"
						border-radius="10px"
						border-width="1px"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						border-style="solid"
						md-width="50%"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-text-align="center"
						sm-padding="15px 13px 15px 13px"
						text-decoration-line="initial"
						color="#ffffff"
						background="#464646"
						margin="0px 0px 0px 0px"
						border-color="rgba(255, 255, 255, 0.3)"
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						hover-background="--color-white"
						hover-color="--indigo"
						href="/login"
						lg-padding="15px 23px 15px 23px"
						md-padding="15px 16px 15px 16px"
					>
						Learn more
					</Link>
				</Box>
				<Text margin="0px 0px 0px 0px" font="25px --fontFamily-googleInter" color="#ffffff">
					<Strong>
						Cost: 20 ETH{"                              "}
					</Strong>
				</Text>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 0px 0px" font="72px --fontFamily-googleKalam" color="#ffffff" max-width="100%">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							<br />
							Founder Perks
						</Strong>
					</Text>
					<Section padding="150px 0 150px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6123949e957019001e284458/images/Group%20177.png?v=2021-08-24T00:44:18.633Z) 0% 30% /cover no-repeat scroll padding-box" sm-padding="0px 0 0px 0" md-padding="50px 0 50px 0">
						<Override
							slot="SectionContent"
							display="grid"
							grid-gap="16px"
							grid-template-columns="repeat(4, 1fr)"
							lg-grid-gap="0px"
							md-grid-template-columns="repeat(2, 1fr)"
						/>
						<Box
							justify-content="center"
							flex-direction="column"
							background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
							empty-min-width="64px"
							empty-border-width="1px"
							empty-border-color="LightGray"
							align-items="center"
							display="flex"
							min-height="320px"
							empty-min-height="64px"
							empty-border-style="solid"
							padding="0px 0px 60px 0px"
						>
							<Text
								lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
								lg-margin="0px 0px 8px 0px"
								position="relative"
								z-index="1"
								color="--indigo"
								font="normal 700 51px/1.2 --fontFamily-googleInter"
								margin="0px 0px 20px 0px"
							>
								1%
								<br />
								Stake
							</Text>
							<Text
								text-align="center"
								opacity="0.7"
								lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
								sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
								md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
								position="relative"
								z-index="1"
								color="--dark"
								font="--lead"
								margin="0px 0px 0px 0px"
							>
								Ownership in the
								<br />
								DAO
							</Text>
						</Box>
						<Box
							empty-min-width="64px"
							empty-border-style="solid"
							empty-border-color="LightGray"
							flex-direction="column"
							background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
							min-height="320px"
							padding="0px 0px 60px 0px"
							empty-min-height="64px"
							empty-border-width="1px"
							display="flex"
							align-items="center"
							justify-content="center"
						>
							<Text
								color="--indigo"
								font="normal 700 49px/1.2 --fontFamily-googleInter"
								margin="0px 0px 20px 0px"
								lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
								lg-margin="0px 0px 8px 0px"
								position="relative"
								z-index="1"
							>
								Lifetime
								<br />
								License
							</Text>
							<Text
								md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
								sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
								z-index="1"
								font="--lead"
								margin="0px 0px 0px 0px"
								text-align="center"
								opacity="0.7"
								position="relative"
								color="--dark"
								lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
							>
								Full Access{" "}
								<br />
								for Life
							</Text>
						</Box>
						<Box
							empty-min-height="64px"
							flex-direction="column"
							background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
							empty-border-style="solid"
							empty-border-color="LightGray"
							display="flex"
							sm-margin="0px 0px 0px 0px"
							empty-min-width="64px"
							empty-border-width="1px"
							justify-content="center"
							min-height="320px"
							md-margin="30px 0px 0px 0px"
							align-items="center"
							padding="0px 0px 60px 0px"
						>
							<Text
								margin="0px 0px 20px 0px"
								lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
								lg-margin="0px 0px 8px 0px"
								position="relative"
								z-index="1"
								color="--indigo"
								font="normal 700 49px/1.2 --fontFamily-googleInter"
							>
								Earn
								<br />
								Fees
							</Text>
							<Text
								opacity="0.7"
								md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
								sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
								z-index="1"
								margin="0px 0px 0px 0px"
								text-align="center"
								lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
								position="relative"
								color="--dark"
								font="--lead"
							>
								From Licenses
								<br />
								& Oracle Subs
							</Text>
						</Box>
						<Box
							flex-direction="column"
							md-margin="30px 0px 0px 0px"
							empty-min-height="64px"
							empty-border-style="solid"
							empty-border-color="LightGray"
							empty-min-width="64px"
							display="flex"
							background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
							padding="0px 0px 60px 0px"
							sm-margin="0px 0px 0px 0px"
							min-height="320px"
							empty-border-width="1px"
							align-items="center"
							justify-content="center"
						>
							<Text
								position="relative"
								z-index="1"
								color="--indigo"
								font="normal 700 49px/1.2 --fontFamily-googleInter"
								margin="0px 0px 20px 0px"
								lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
								lg-margin="0px 0px 8px 0px"
							>
								Unique
								<br />
								ENS
							</Text>
							<Text
								lg-width="70%"
								width="70%"
								position="relative"
								z-index="1"
								color="--dark"
								text-align="center"
								opacity="0.7"
								md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
								font="--lead"
								margin="0px 0px 0px 0px"
								lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
								sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
							>
								01.Scry.eth
							</Text>
						</Box>
					</Section>
					<Structure cells-number-total="4" cells-number-group="4">
						<Override slot="Content" grid-template-columns="repeat(2, 6fr)" sm-grid-template-columns="12fr">
							<Override slot="cell-0">
								<Text margin="0px 0px 0px 0px" color="#ffffff" font="18px --fontFamily-googleInter" max-width="1000%">
									<Strong
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										user-select="auto"
										pointer-events="auto"
									>
										1 % ownership of the protocol and voting rights per NFT.{" "}
										<br />
										Able to make proposolas, vote on proposals and control the projects as we whole.
										<br />
										<br />
										<br />
									</Strong>
								</Text>
							</Override>
							<Override slot="cell-1">
								<Text margin="0px 0px 0px 0px" color="#ffffff" font="18px --fontFamily-googleInter" max-width="100%">
									<Strong
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										user-select="auto"
										pointer-events="auto"
									>
										Lifetime license to the protocol's oracles, tools, infrastructure, node software, front end whitelist and smart contracts for commercial and non commercial use
										<br />
										<br />
									</Strong>
								</Text>
							</Override>
							<Override slot="cell-2">
								<Text margin="0px 0px 0px 0px" color="#ffffff" font="18px --fontFamily-googleInter" max-width="100%">
									<Strong
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										user-select="auto"
										pointer-events="auto"
									>
										{" "}Earn fees from oracle licenses as well as a cut from oracles membership subscriptions to data feeds.
										<br />
										<br />
									</Strong>
								</Text>
							</Override>
							<Override slot="cell-3">
								<Text margin="0px 0px 0px 0px" color="#ffffff" font="18px --fontFamily-googleInter" max-width="100%">
									<Strong
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										user-select="auto"
										pointer-events="auto"
									>
										{" "}Unique business card NFT which shows your role in the DAO as well as ENS information and key protocol information at the back.
										<br />
										<br />
									</Strong>
								</Text>
							</Override>
							<Override slot="Cell 0th" display="block" text-align="center" background="rgba(255, 255, 255, 0.2)" />
							<Override slot="Cell 1st" background="rgba(255, 255, 255, 0.2)" />
							<Override slot="Cell 2nd" background="rgba(255, 255, 255, 0.2)" />
							<Override slot="Cell 3rd" background="rgba(255, 255, 255, 0.2)" />
						</Override>
					</Structure>
				</Box>
			</Box>
		</Section>
		<Section md-padding="60px 0 60px 0" padding="84px 0 60px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-wrap="wrap" flex-direction="row" />
			<Box
				border-radius="10px"
				flex-direction="column"
				width="33.333%"
				md-padding="0px 0px 0px 0px"
				sm-padding="16px 16px 16px 16px"
				display="flex"
				align-items="flex-start"
				justify-content="flex-start"
				margin="0px 0px 0px 0px"
				lg-margin="0px 0px 0px 0px"
				md-width="50%"
				sm-width="100%"
				padding="16px 16px 16px 16px"
			>
				<Text
					color="--primary"
					letter-spacing="0.1em"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					font="--lead"
				>
					Scry Licenses
				</Text>
				<Text
					lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
					position="relative"
					z-index="1"
					color="--indigo"
					font="--headline4"
					margin="15px 0px 0px 0px"
					sm-font="700 25px/1.3 &quot;Inter&quot;, sans-serif"
				>
					Licenses
				</Text>
				<Text margin="20px 0px 10px 0px" color="--dark" font="--base" opacity=".9">
					Scry Licenses are an unlimited mint license which allows the holder the right to use the Scry Protocol and all features and infrastructure. These licenses are dynamic renewal and open access for projects and devs to create, maintain and operate their oracles
				</Text>
				<Image height="48px" src="https://uploads.quarkly.io/6123949e957019001e284458/images/akar-icons_arrow-right.svg?v=2021-09-22T00:57:24.639Z" width="48px" />
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="33.333%"
				md-width="50%"
				sm-width="100%"
			>
				<LinkBox
					lg-min-height="350px"
					md-min-height="200px"
					margin="0 0px 0 0"
					padding="0px 0px 0px 0px"
					md-width="100%"
				>
					<Components.HoverBox
						border-color="rgba(66, 82, 207, 0.1)"
						lg-height="100%"
						overflow-x="hidden"
						overflow-y="hidden"
						height="100%"
						width="100%"
						flex-direction="column"
						border-style="solid"
						border-width="2px"
						border-radius="10px"
						md-min-height="200px"
						lg-min-height="350px"
						padding="0px 0px 0px 0px"
						display="flex"
						justify-content="flex-end"
					>
						<Override
							slot="Icon"
							font="48px sans-serif"
							category="fa"
							icon={FaHeartbeat}
							size="48px"
							color="--primary"
						/>
						<Override
							slot="Before Text"
							color="--white"
							opacity="0.8"
							font="--textBase"
							margin="0px 0px 0px 0px"
						/>
						<Override slot="Icon :default" category="fa" icon={FaHeartbeat} color="--indigo" />
						<Override slot="Before Text2" margin="33px 0px 7px 0px" font="--lead" color="--white">
							Automated Nodet
						</Override>
						<Override slot="Before Text :default" color="--dark" font="--textBase">
							Use our autonomous node to submit all data for your oracles. Managed by a simple spreadsheet and no code required.
						</Override>
						<Override slot="Box :default" background="--color-white" />
						<Override slot="Before Text2 :default" color="--indigo" font="--lead">
							Automated Node
						</Override>
						<Override slot="Before Text2 :hover">
							Automated Node
						</Override>
						<Override
							slot="Box"
							lg-min-height="370px"
							padding="32px 32px 32px 32px"
							display="flex"
							flex-direction="column"
							height="100%"
							min-height="284px"
							md-padding="16px 16px 16px 16px"
							lg-height="100%"
							justify-content="flex-end"
							md-min-height="232px"
						/>
						<Override slot="Box :hover" background="--color-indigo" />
						<Override slot="Before Text :hover">
							Full access to the source code for our oracle node which submits all feed updates as batch data. Managed with a google spreadsheet and simple to setup and use.
						</Override>
					</Components.HoverBox>
				</LinkBox>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				sm-width="100%"
				empty-min-width="64px"
				width="33.333%"
				padding="16px 16px 16px 16px"
				md-width="50%"
				empty-border-style="solid"
			>
				<LinkBox
					margin="0 0px 0 0"
					padding="0px 0px 0px 0px"
					md-width="100%"
					lg-min-height="350px"
					md-min-height="200px"
				>
					<Components.HoverBox
						lg-height="100%"
						padding="0px 0px 0px 0px"
						justify-content="flex-end"
						border-color="rgba(66, 82, 207, 0.1)"
						overflow-x="hidden"
						border-width="2px"
						height="100%"
						md-min-height="200px"
						display="flex"
						border-style="solid"
						lg-min-height="350px"
						width="100%"
						flex-direction="column"
						border-radius="10px"
						overflow-y="hidden"
					>
						<Override
							slot="Icon"
							category="fa"
							icon={FaCommentMedical}
							size="48px"
							color="--primary"
							font="48px sans-serif"
						/>
						<Override
							slot="Before Text"
							margin="0px 0px 0px 0px"
							color="--white"
							opacity="0.8"
							font="--textBase"
						/>
						<Override slot="Icon :default" category="fa" color="--indigo" />
						<Override slot="Before Text :default" color="--dark" font="--textBase">
							Support for any and all questions and needs. We will help you setup, maintain and create new feeds for your oracles.
						</Override>
						<Override slot="Before Text2 :default" color="--indigo" font="--lead">
							Priority Support
						</Override>
						<Override slot="Before Text2" margin="33px 0px 7px 0px" font="--lead" color="--white" />
						<Override slot="Before Text2 :hover">
							Priority Support
						</Override>
						<Override
							slot="Box"
							justify-content="flex-end"
							height="100%"
							min-height="284px"
							md-min-height="232px"
							lg-height="100%"
							flex-direction="column"
							display="flex"
							md-padding="16px 16px 16px 16px"
							lg-min-height="370px"
							padding="32px 32px 32px 32px"
						/>
						<Override slot="Box :default" background="--color-white" />
						<Override slot="Box :hover" background="--color-indigo" />
						<Override slot="Before Text :hover">
							Priority Support Discord channel to help you create oracles, setup nodes, hook up dapps and any other questions you may have.
						</Override>
					</Components.HoverBox>
				</LinkBox>
			</Box>
			<Box
				empty-border-style="solid"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				width="33.333%"
				padding="16px 16px 16px 16px"
				md-width="50%"
				sm-width="100%"
			>
				<LinkBox
					lg-min-height="350px"
					md-min-height="200px"
					margin="0 0px 0 0"
					padding="0px 0px 0px 0px"
					md-width="100%"
				>
					<Components.HoverBox
						padding="0px 0px 0px 0px"
						flex-direction="column"
						overflow-x="hidden"
						md-min-height="200px"
						display="flex"
						border-color="rgba(66, 82, 207, 0.1)"
						border-width="2px"
						border-style="solid"
						lg-height="100%"
						height="100%"
						width="100%"
						justify-content="flex-end"
						border-radius="10px"
						overflow-y="hidden"
						lg-min-height="350px"
					>
						<Override slot="Before Text2" margin="33px 0px 7px 0px" font="--lead" color="--white">
							Whitelist
						</Override>
						<Override slot="Before Text :default" color="--dark" font="--textBase">
							Whitelist oracle addresses for easy explore in the front end as well as an ENS domain attached.
						</Override>
						<Override slot="Icon :default" category="fa" color="--indigo" />
						<Override slot="Before Text2 :default" color="--indigo" font="--lead">
							Whitelist
						</Override>
						<Override slot="Before Text2 :hover">
							Whitelist
						</Override>
						<Override
							slot="Box"
							flex-direction="column"
							min-height="284px"
							padding="32px 32px 32px 32px"
							display="flex"
							md-padding="16px 16px 16px 16px"
							md-min-height="232px"
							lg-height="100%"
							lg-min-height="370px"
							justify-content="flex-end"
							height="100%"
						/>
						<Override slot="Box :default" background="--color-white" />
						<Override slot="Box :hover" background="--color-indigo" />
						<Override slot="Before Text :hover">
							Whitelist oracle addresses for easy explore in the front end as well as an ENS domain attached.
						</Override>
						<Override
							slot="Icon"
							category="fa"
							icon={FaRegCheckCircle}
							size="48px"
							color="--primary"
							font="48px sans-serif"
						/>
						<Override
							slot="Before Text"
							margin="0px 0px 0px 0px"
							color="--white"
							opacity="0.8"
							font="--textBase"
						/>
					</Components.HoverBox>
				</LinkBox>
			</Box>
			<Box
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				md-width="50%"
				sm-width="100%"
				empty-min-height="64px"
				empty-border-style="solid"
				width="33.333%"
			>
				<LinkBox
					md-min-height="200px"
					margin="0 0px 0 0"
					padding="0px 0px 0px 0px"
					md-width="100%"
					lg-min-height="350px"
				>
					<Components.HoverBox
						flex-direction="column"
						border-style="solid"
						lg-height="100%"
						width="100%"
						md-min-height="200px"
						padding="0px 0px 0px 0px"
						display="flex"
						justify-content="flex-end"
						border-width="2px"
						border-radius="10px"
						overflow-x="hidden"
						overflow-y="hidden"
						height="100%"
						border-color="rgba(66, 82, 207, 0.1)"
						lg-min-height="350px"
					>
						<Override
							slot="Icon"
							size="48px"
							color="--primary"
							font="48px sans-serif"
							category="fa"
							icon={FaDollarSign}
						/>
						<Override
							slot="Before Text"
							margin="0px 0px 0px 0px"
							color="--white"
							opacity="0.8"
							font="--textBase"
						/>
						<Override slot="Before Text2 :default" color="--indigo" font="--lead">
							Earn Fees
						</Override>
						<Override
							slot="Box"
							md-min-height="232px"
							lg-height="100%"
							flex-direction="column"
							justify-content="flex-end"
							md-padding="16px 16px 16px 16px"
							min-height="284px"
							lg-min-height="370px"
							padding="32px 32px 32px 32px"
							display="flex"
							height="100%"
						/>
						<Override slot="Before Text :hover">
							Be a data provider for other projects and earn fees through subscriptions to your data.
						</Override>
						<Override slot="Icon :default" category="fa" color="--indigo" />
						<Override slot="Before Text2" margin="33px 0px 7px 0px" font="--lead" color="--white">
							Earn Fees
						</Override>
						<Override slot="Before Text :default" color="--dark" font="--textBase">
							Be a data provider for other projects and earn fees through subscriptions to your data.
						</Override>
						<Override slot="Before Text2 :hover">
							Earn Fees
						</Override>
						<Override slot="Box :default" background="--color-white" />
						<Override slot="Box :hover" background="--color-indigo" />
					</Components.HoverBox>
				</LinkBox>
			</Box>
			<Box
				sm-width="100%"
				empty-min-width="64px"
				empty-border-color="LightGray"
				width="33.333%"
				md-width="50%"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
			>
				<LinkBox
					margin="0 0px 0 0"
					padding="0px 0px 0px 0px"
					md-width="100%"
					lg-min-height="350px"
					md-min-height="200px"
				>
					<Components.HoverBox
						flex-direction="column"
						overflow-y="hidden"
						lg-height="100%"
						padding="0px 0px 0px 0px"
						width="100%"
						border-style="solid"
						md-min-height="200px"
						lg-min-height="350px"
						display="flex"
						border-color="rgba(66, 82, 207, 0.1)"
						border-width="2px"
						overflow-x="hidden"
						height="100%"
						justify-content="flex-end"
						border-radius="10px"
					>
						<Override
							slot="Icon :default"
							color="--indigo"
							icon={IoIosWater}
							size="48px"
							category="io"
						/>
						<Override slot="Before Text :default" color="--dark" font="--textBase">
							Purchase full access to the node source, contract source as well as the rights to use any and all tools and infrastructure on mainnets.
						</Override>
						<Override slot="Before Text2 :hover">
							Full Access
						</Override>
						<Override
							slot="Box"
							padding="32px 32px 32px 32px"
							justify-content="flex-end"
							min-height="284px"
							md-min-height="232px"
							lg-height="100%"
							lg-min-height="370px"
							display="flex"
							flex-direction="column"
							md-padding="16px 16px 16px 16px"
						/>
						<Override slot="Box :default" background="--color-white" />
						<Override slot="Box :hover" background="--color-indigo" />
						<Override
							slot="Icon"
							size="48px"
							color="--primary"
							font="48px sans-serif"
							category="io"
							icon={IoIosCheckmarkCircleOutline}
						/>
						<Override
							slot="Before Text"
							opacity="0.8"
							font="--textBase"
							margin="0px 0px 0px 0px"
							color="--white"
						/>
						<Override slot="Before Text2 :default" color="--indigo" font="--lead">
							Full Access
						</Override>
						<Override slot="Before Text2" color="--white" margin="33px 0px 7px 0px" font="--lead">
							Full Access
						</Override>
						<Override slot="Before Text :hover">
							Purchase full access to the node source, contract source as well as the rights to use any and all tools and infrastructure on mainnets, for commercial and noncommercial uses. Renew your license in real time. Buy access and lock in your membership for as long as you want.
						</Override>
					</Components.HoverBox>
				</LinkBox>
			</Box>
		</Section>
		<Section lg-padding="60px 0 40px 0" padding="60px 0 100px 0" md-padding="30px 0 30px 0">
			<Text
				md-margin="0px 0px 40px 0px"
				lg-margin="0px 0px 40px 0px"
				margin="0px 0px 80px 0px"
				font="--headline2"
				color="--indigo"
				lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
				md-font="normal 700 20px/1.2 &quot;Inter&quot;, sans-serif"
			>
				Features
			</Text>
			<Box
				margin="0px 0px 20px 0px"
				sm-margin="0px 0px 30px 0px"
				border-radius="10px"
				min-height="284px"
				md-border-radius="0px"
				padding="0px 0px 0px 0px"
				border-style="solid"
				display="flex"
				border-width="2px"
				flex-wrap="wrap"
				md-border-width="0px 0px 2px 0px"
				width="100%"
				border-color="rgba(66, 82, 207, 0.1)"
				md-border-color="rgba(66, 82, 207, 0.1)"
			>
				<Box display="flex" lg-width="50%" md-width="100%" width="30%">
					<Image
						margin="-1px 0px -1px -1px"
						src="https://uploads.quarkly.io/62f76506f913c500201c9228/images/unknown.png?v=2022-08-13T12:11:41.624Z"
						object-fit="cover"
						width="100%"
						border-radius="10px"
						md-margin="0px 0px 0px 0px"
					/>
				</Box>
				<Box
					padding="32px 17% 32px 62px"
					width="70%"
					justify-content="space-between"
					md-width="100%"
					md-padding="32px 30px 32px 0px"
					display="flex"
					flex-direction="column"
					position="relative"
					lg-padding="32px 30px 32px 32px"
					lg-width="50%"
				>
					<LinkBox
						bottom="auto"
						lg-right="16px"
						lg-top="49px"
						position="absolute"
						right="32px"
						top="32px"
						left="auto"
					>
						<Image
							width="48px"
							height="48px"
							top="32px"
							left="auto"
							lg-height="24px"
							src="https://uploads.quarkly.io/6123949e957019001e284458/images/akar-icons_arrow-right.svg?v=2021-09-22T00:57:24.639Z"
							position="static"
							right="32px"
							bottom="auto"
							lg-width="24px"
						/>
					</LinkBox>
					<Text
						color="--indigo"
						width="85%"
						lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
						margin="0px 0px 8px 0px"
						font="--headline4"
					>
						Online Health Tools for Oracles
					</Text>
					<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1">
						Realtime Data on oracle and feed health, submitted data, signers as well as explorer to see all feed values for the oracles
					</Text>
				</Box>
			</Box>
			<Box
				display="flex"
				sm-margin="0px 0px 30px 0px"
				padding="0px 0px 0px 0px"
				md-border-width="0px 0px 2px 0px"
				margin="0px 0px 20px 0px"
				width="100%"
				border-style="solid"
				border-color="rgba(66, 82, 207, 0.1)"
				border-width="2px"
				border-radius="10px"
				flex-wrap="wrap"
				min-height="284px"
				md-border-radius="0px"
			>
				<Box
					padding="32px 17% 32px 62px"
					width="70%"
					display="flex"
					position="relative"
					md-padding="32px 30px 32px 0px"
					flex-direction="column"
					justify-content="space-between"
					lg-padding="32px 30px 32px 32px"
					lg-width="50%"
					md-width="100%"
				>
					<LinkBox
						lg-right="16px"
						lg-top="49px"
						position="absolute"
						right="32px"
						top="32px"
						left="auto"
						bottom="auto"
					>
						<Image
							src="https://uploads.quarkly.io/6123949e957019001e284458/images/akar-icons_arrow-right.svg?v=2021-09-22T00:57:24.639Z"
							left="auto"
							lg-height="24px"
							top="32px"
							bottom="auto"
							lg-width="24px"
							width="48px"
							height="48px"
							position="static"
							right="32px"
						/>
					</LinkBox>
					<Text
						margin="0px 0px 8px 0px"
						font="--headline4"
						color="--indigo"
						width="85%"
						lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
					>
						Automated Node
					</Text>
					<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1">
						Full access to the autonomous node which uses a simple to use spreadsheet which manages all data needed for the node. Just put the API endpoint, the JSON path and some basic details like a feed name and the node will create the feeds and submit data to the oracle automatically. Also reprices transactions during high network use as well as batches all updates as 1 transaction.{" "}
					</Text>
				</Box>
				<Box
					md-order="-1"
					width="30%"
					display="flex"
					lg-width="50%"
					md-width="100%"
				>
					<Image
						object-fit="cover"
						width="100%"
						border-radius="10px"
						md-margin="0px 0px 0px 0px"
						margin="-1px -1px -1px 0px"
						src="https://uploads.quarkly.io/62f76506f913c500201c9228/images/unknown.png?v=2022-08-13T12:13:18.841Z"
					/>
				</Box>
			</Box>
			<Box
				display="flex"
				width="100%"
				border-style="solid"
				border-radius="10px"
				min-height="284px"
				md-border-radius="0px"
				margin="0px 0px 20px 0px"
				sm-margin="0px 0px 30px 0px"
				padding="0px 0px 0px 0px"
				border-color="rgba(66, 82, 207, 0.1)"
				border-width="2px"
				flex-wrap="wrap"
				md-border-width="0px 0px 2px 0px"
			>
				<Box md-width="100%" width="30%" display="flex" lg-width="50%">
					<Image
						margin="-1px 0px -1px -1px"
						src="https://images.unsplash.com/photo-1601569205943-53aac3dcef67?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=2000"
						object-fit="cover"
						width="100%"
						border-radius="10px"
						md-margin="0px 0px 0px 0px"
					/>
				</Box>
				<Box
					md-width="100%"
					padding="32px 17% 32px 62px"
					display="flex"
					lg-width="50%"
					position="relative"
					lg-padding="32px 30px 32px 32px"
					md-padding="32px 30px 32px 0px"
					width="70%"
					flex-direction="column"
					justify-content="space-between"
				>
					<LinkBox
						position="absolute"
						right="32px"
						top="32px"
						bottom="auto"
						left="auto"
						lg-right="16px"
						lg-top="49px"
					>
						<Image
							lg-width="24px"
							lg-height="24px"
							right="32px"
							top="32px"
							left="auto"
							bottom="auto"
							width="48px"
							height="48px"
							src="https://uploads.quarkly.io/6123949e957019001e284458/images/akar-icons_arrow-right.svg?v=2021-09-22T00:57:24.639Z"
							position="static"
						/>
					</LinkBox>
					<Text
						margin="0px 0px 8px 0px"
						font="--headline4"
						color="--indigo"
						width="85%"
						lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
					>
						High Scale
					</Text>
					<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1">
						Support 100s-1000s of feeds with a single oracle. Grab data from ANY API and bring onchain. Change frequency for updates at the feed level.
					</Text>
				</Box>
			</Box>
			<Box
				width="100%"
				padding="0px 0px 0px 0px"
				flex-wrap="wrap"
				min-height="284px"
				display="flex"
				margin="0px 0px 20px 0px"
				sm-margin="0px 0px 30px 0px"
			>
				<Box
					flex-direction="row"
					justify-content="space-between"
					position="relative"
					lg-padding="16px 0px 16px 0px"
					md-width="100%"
					padding="32px 0px 32px 0px"
					width="70%"
					display="flex"
				>
					<LinkBox
						border-color="rgba(66, 82, 207, 0.1)"
						hover-background="--color-indigo"
						width="50%"
						padding="0px 0px 0px 0px"
						border-style="solid"
						height="100%"
						justify-content="flex-start"
						align-items="flex-start"
						hover-color="--white"
						display="flex"
						border-width="0px 1px 0px 0px"
					>
						<Components.HoverBox2 height="100%">
							<Override slot="Before Text2 :default" color="--indigo">
								License NFTs coming soon...
							</Override>
							<Override slot="Before Text :default" color="--dark">
								Grab a founder NFT for a lifetime license or check back soon.
							</Override>
							<Override
								slot="Before Text"
								width="100%"
								color="--white"
								opacity=".8"
								margin="8px 0px 0px 0px"
								font="--textBase"
							/>
							<Override slot="Before Text :hover">
								Grab a founder NFT for a lifetime license or check back soon.
							</Override>
							<Override slot="Before Text2 :hover">
								License NFTs coming soon...
							</Override>
							<Override
								slot="Box"
								flex-wrap="wrap"
								align-items="center"
								height="100%"
								lg-padding="32px 35px 16px 16px"
								sm-padding="32px 35px 16px 0px"
								padding="32px 115px 16px 16px"
								display="flex"
							/>
							<Override
								slot="Before Text2"
								width="80%"
								color="--indigo"
								margin="0px 0px 0px 0px"
								lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
								sm-font="600 18px/1.3 &quot;Inter&quot;, sans-serif"
								font="--headline4"
							>
								License NFTs coming soon...
							</Override>
							<Override
								slot="Image"
								src="https://uploads.quarkly.io/6123949e957019001e284458/images/akar-icons_arrow-right.svg?v=2021-09-22T00:57:24.639Z"
								width="20%"
								max-width="48px"
								max-height="48px"
							/>
							<Override slot="Image :hover" src="https://uploads.quarkly.io/6123949e957019001e284458/images/akar-icons_arrow-right-blue.svg?v=2021-09-23T15:27:49.382Z" />
						</Components.HoverBox2>
					</LinkBox>
					<LinkBox
						width="50%"
						border-width="0px 0px 0px 1px"
						border-color="rgba(66, 82, 207, 0.1)"
						justify-content="flex-start"
						hover-background="--color-indigo"
						hover-color="--white"
						display="flex"
						padding="0px 0px 0px 0px"
						border-style="solid"
						height="100%"
						align-items="flex-start"
					>
						<Components.HoverBox2 height="100%">
							<Override slot="Before Text2 :default" color="--indigo">
								Check the docs
							</Override>
							<Override
								slot="Before Text2"
								font="--headline4"
								width="80%"
								color="--indigo"
								margin="0px 0px 0px 0px"
								lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
								sm-font="600 18px/1.3 &quot;Inter&quot;, sans-serif"
							/>
							<Override slot="Before Text :default" color="--dark">
								Check out our docs and workshops
							</Override>
							<Override slot="Before Text2 :hover">
								Check the docs
							</Override>
							<Override
								slot="Box"
								flex-wrap="wrap"
								align-items="center"
								height="100%"
								lg-padding="32px 35px 16px 16px"
								sm-padding="32px 0px 16px 16px"
								sm-align-items="flex-start"
								padding="32px 115px 16px 16px"
								display="flex"
							/>
							<Override
								slot="Before Text"
								opacity=".8"
								margin="8px 0px 0px 0px"
								font="--textBase"
								width="100%"
								color="--white"
							/>
							<Override
								slot="Image"
								src="https://uploads.quarkly.io/6123949e957019001e284458/images/akar-icons_arrow-right.svg?v=2021-09-22T00:57:24.639Z"
								width="20%"
								max-width="48px"
								max-height="48px"
							/>
							<Override slot="Box :hover" background="--color-indigo" />
							<Override slot="Before Text :hover">
								Check out our docs and workshops
							</Override>
							<Override slot="Image :hover" src="https://uploads.quarkly.io/6123949e957019001e284458/images/akar-icons_arrow-right-blue.svg?v=2021-09-23T15:27:49.382Z" />
						</Components.HoverBox2>
					</LinkBox>
				</Box>
				<Box width="30%" display="flex" lg-padding="32px 0px 32px 0px" md-width="100%">
					<Image object-fit="cover" width="100%" border-radius="10px" src="https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=2000" />
				</Box>
			</Box>
		</Section>
		<Section
			padding="60px 0 90px 0"
			position="relative"
			lg-padding="60px 0 60px 0"
			sm-padding="30px 0 30px 0"
			md-padding="30px 0 30px 0"
		>
			<Override
				slot="SectionContent"
				lg-padding="0px 0px 0px 0px"
				max-width="1194px"
				flex-wrap="wrap"
				flex-direction="row"
			/>
			<Box
				lg-align-items="flex-start"
				flex-direction="row"
				justify-content="flex-start"
				margin="0px 0px 64px 0px"
				padding="16px 0px 16px 0px"
				lg-margin="0px 0px 24px 0px"
				sm-flex-wrap="wrap"
				display="flex"
				align-items="center"
				sm-margin="0px 0px 30px 0px"
				width="100%"
			>
				<Box width="40%" sm-width="100%">
					<Text color="--indigo" sm-margin="0px 0px 16px 0px" margin="0px 0px 0px 0px" font="--headline4">
						Partners and Users
					</Text>
				</Box>
				<Box width="60%" padding="0px 20% 0px 0px" lg-padding="0px 0px 0px 0px" sm-width="100%">
					<Text margin="0px 0px 0px 0px" font="--textBase" color="--dark">
						We believe in supporting those that support us
					</Text>
				</Box>
			</Box>
			<Hr
				border-style="solid"
				height="0px"
				margin="0px 0px 32px 0px"
				lg-margin="0px 0px 16px 0px"
				lg-display="none"
				width="100%"
				border-color="rgba(66, 82, 207, 0.1)"
				border-width="2px 0 0 0"
			/>
			<Box
				margin="0px 0px 0px 0px"
				sm-flex-wrap="wrap"
				sm-margin="0px 0px 0px 0px"
				justify-content="center"
				flex-wrap="wrap"
				width="100%"
				display="flex"
			>
				<Box
					border-style="solid"
					sm-padding="0px 0px 0px 0px"
					border-color="rgba(66, 82, 207, 0.1)"
					lg-padding="16px 16px 16px 16px"
					md-width="50%"
					sm-display="flex"
					sm-align-items="center"
					width="33.333%"
					padding="32px 74px 32px 74px"
					border-width="0px 1px 0px 0px"
					sm-justify-content="center"
				>
					<Box
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						justify-content="center"
						margin="0px 0px 0px 0px"
						sm-width="90%"
						width="100%"
						padding="18px 25px 18px 25px"
						display="flex"
						align-items="center"
						lg-padding="18px 18px 18px 18px"
					>
						<Text margin="0px 0px 0px 0px">
							<Strong>
								Coming Soon
							</Strong>
						</Text>
					</Box>
				</Box>
				<Box
					border-width="0px 1px 0px 1px"
					md-border-width="0px 0px 0px 1px"
					sm-display="flex"
					sm-align-items="center"
					md-width="50%"
					sm-padding="0px 0px 0px 0px"
					sm-justify-content="center"
					width="33.333%"
					padding="32px 74px 32px 74px"
					border-style="solid"
					border-color="rgba(66, 82, 207, 0.1)"
					lg-padding="16px 16px 16px 16px"
				>
					<Box
						sm-width="90%"
						width="100%"
						padding="18px 25px 18px 25px"
						align-items="center"
						margin="0px 0px 0px 0px"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						display="flex"
						justify-content="center"
						lg-padding="18px 18px 18px 18px"
					>
						<Text margin="0px 0px 0px 0px">
							<Strong>
								Coming Soon
							</Strong>
						</Text>
					</Box>
				</Box>
				<Hr
					md-display="block"
					display="none"
					border-style="solid"
					height="0px"
					lg-margin="16px 0px 16px 0px"
					margin="32px 0px 32px 0px"
					width="100%"
					border-color="rgba(66, 82, 207, 0.1)"
					border-width="2px 0 0 0"
				/>
				<Box
					lg-padding="16px 16px 16px 16px"
					md-width="50%"
					md-border-width="0px 1px 0px 0px"
					sm-display="flex"
					sm-justify-content="center"
					padding="32px 74px 32px 74px"
					border-width="0px 0px 0px 1px"
					border-style="solid"
					sm-align-items="center"
					width="33.333%"
					border-color="rgba(66, 82, 207, 0.1)"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						margin="0px 0px 0px 0px"
						width="100%"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						align-items="center"
						lg-padding="18px 18px 18px 18px"
						sm-width="90%"
						padding="18px 25px 18px 25px"
						display="flex"
						justify-content="center"
					>
						<Text margin="0px 0px 0px 0px">
							<Strong>
								Coming Soon
							</Strong>
						</Text>
					</Box>
				</Box>
				<Hr
					margin="32px 0px 32px 0px"
					lg-margin="16px 0px 16px 0px"
					md-display="none"
					width="100%"
					border-color="rgba(66, 82, 207, 0.1)"
					border-width="2px 0 0 0"
					border-style="solid"
					height="0px"
				/>
				<Box
					padding="32px 74px 32px 74px"
					border-style="solid"
					md-border-width="0px 0px 0px 1px"
					sm-display="flex"
					sm-justify-content="center"
					width="33.333%"
					border-width="0px 1px 0px 0px"
					border-color="rgba(66, 82, 207, 0.1)"
					lg-padding="16px 16px 16px 16px"
					md-width="50%"
					sm-padding="0px 0px 0px 0px"
					sm-align-items="center"
				>
					<Box
						padding="18px 25px 18px 25px"
						display="flex"
						align-items="center"
						lg-padding="18px 18px 18px 18px"
						width="100%"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						justify-content="center"
						margin="0px 0px 0px 0px"
						sm-width="90%"
					>
						<Text margin="0px 0px 0px 0px">
							<Strong>
								Coming Soon
							</Strong>
						</Text>
					</Box>
				</Box>
				<Hr
					height="0px"
					border-width="2px 0 0 0"
					border-style="solid"
					margin="32px 0px 32px 0px"
					lg-margin="16px 0px 16px 0px"
					md-display="block"
					display="none"
					width="100%"
					border-color="rgba(66, 82, 207, 0.1)"
				/>
				<Box
					md-width="50%"
					sm-padding="0px 0px 0px 0px"
					sm-justify-content="center"
					padding="32px 74px 32px 74px"
					border-style="solid"
					border-color="rgba(66, 82, 207, 0.1)"
					sm-display="flex"
					sm-align-items="center"
					md-border-width="0px 1px 0px 0px"
					width="33.333%"
					border-width="0px 1px 0px 1px"
					lg-padding="16px 16px 16px 16px"
				>
					<Box
						width="100%"
						padding="18px 25px 18px 25px"
						display="flex"
						justify-content="center"
						margin="0px 0px 0px 0px"
						lg-padding="18px 18px 18px 18px"
						sm-width="90%"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						align-items="center"
					>
						<Text margin="0px 0px 0px 0px">
							<Strong>
								Coming Soon
							</Strong>
						</Text>
					</Box>
				</Box>
				<Box
					sm-display="flex"
					sm-align-items="center"
					width="33.333%"
					border-color="rgba(66, 82, 207, 0.1)"
					lg-padding="16px 16px 16px 16px"
					sm-padding="0px 0px 0px 0px"
					sm-justify-content="center"
					padding="32px 74px 32px 74px"
					border-width="0px 0px 0px 1px"
					border-style="solid"
					md-width="50%"
				>
					<Box
						justify-content="center"
						margin="0px 0px 0px 0px"
						lg-padding="18px 18px 18px 18px"
						width="100%"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						padding="18px 25px 18px 25px"
						display="flex"
						align-items="center"
						sm-width="90%"
					>
						<Text margin="0px 0px 0px 0px">
							<Strong>
								Coming Soon
							</Strong>
						</Text>
					</Box>
				</Box>
			</Box>
			<Hr
				border-style="solid"
				height="0px"
				margin="32px 0px 0px 0px"
				lg-margin="16px 0px 0px 0px"
				lg-display="none"
				width="100%"
				border-color="rgba(66, 82, 207, 0.1)"
				border-width="2px 0 0 0"
			/>
		</Section>
		<Section background="--color-indigo" padding="100px 0 0px 0" md-padding="40px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-border-color="LightGray"
				flex-direction="column"
				md-justify-content="center"
				display="flex"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				width="25%"
				md-align-items="center"
			>
				<Image src="https://uploads.quarkly.io/62f76506f913c500201c9228/images/16526517857074605_1.png?v=2022-08-13T08:49:54.475Z" display="block" />
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				width="25%"
				display="flex"
				md-width="100%"
				md-justify-content="center"
				empty-border-width="1px"
				empty-border-style="solid"
				flex-direction="column"
				padding="16px 16px 16px 16px"
				md-align-items="center"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					Developers
				</Text>
				<Link
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="https://Github.com/Scryprotocol"
					color="--white"
					opacity=".8"
				>
					Github
				</Link>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="https://docs.scry.finance"
					color="--white"
				>
					Docs
				</Link>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="https://app.scry.finance"
					color="--white"
				>
					Front End
				</Link>
				<Link
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 0px 0px"
					font="--base"
					href="https://youtube.com/conjurefi"
				>
					Workshop
				</Link>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-color="LightGray"
				width="25%"
				display="flex"
				flex-direction="column"
				md-justify-content="center"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				md-width="100%"
				md-align-items="center"
				empty-border-width="1px"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					Socials
				</Text>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="https://twitter.com/scryprotocol"
					color="--white"
				>
					Twitter
				</Link>
				<Link
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
				>
					Discord
				</Link>
				<Link
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="https://scry.finance"
				>
					Website
				</Link>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 0px 0px"
					font="--base"
					href="https://app.scry.finance"
					color="--white"
				>
					App
				</Link>
			</Box>
		</Section>
		<Box
			empty-border-style="solid"
			empty-border-color="LightGray"
			background=",--color-indigo url(https://uploads.quarkly.io/6123949e957019001e284458/images/backfooter.svg?v=2021-08-24T19:40:13.860Z) 0% 0% /cover repeat scroll padding-box"
			min-height="220px"
			md-min-height="140px"
			empty-min-width="64px"
			empty-min-height="64px"
			empty-border-width="1px"
		/>
		<Components.QuarklycommunityKitNetlifyForm />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6123949e957019001e284456"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});