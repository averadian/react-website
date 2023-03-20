// Component Imports
import ProjectArticle from './../Components/ProjectArticle/ProjectArticle';
import ProjectMaterialList from '../Components/ProjectMaterialList/ProjectMaterialList';
import ProjectWrapper from './../Components/ProjectWrapper/ProjectWrapper';
// TextBlock Imports
import ParagraphBlock from './../Components/TextBlocks/ParagraphBlock';
import TitleBlock from './../Components/TextBlocks/TitleBlock';
import ListBlock from '../Components/TextBlocks/ListBlock';
import CaptionImageBlock from './../Components/TextBlocks/CaptionImageBlock';
import CollectionImageBlock from './../Components/TextBlocks/CollectionImageBlock';
import OrderedListBlock from '../Components/TextBlocks/OrderedListBlock';
import PartBlock from '../Components/TextBlocks/PartBlock';
import BackButton from '../Components/BackButton/BackButton';

const PiBag = (props) => {
	const { OverlayUp, AccentColor } = props;

	return (
		<>
		<BackButton OverlayUp={OverlayUp} />
		<ProjectWrapper>
			<ProjectArticle Title={"Pi Bag, A Portable Raspbian Bag"} MinRead={"15"} Date={"March 20, 2023"} DateTime={"2023-03-20"} ImgUrl={"/pi-bag-portrait.jpg"} AccentColor={AccentColor}>
				<ParagraphBlock Content="Over the last few years, Raspberry Pi’s have become increasingly more powerful, to the point where you can reliably use it as a day-to-day driver for most online activities. Raspberry Pi’s are also great for programmers and inventors, offering lots of ways to customize the software and hardware of the device." />
				<ParagraphBlock Content="Its small size makes it perfect for bringing with you on the go, however, without a screen and power source it's fairly useless. That's why I’ve decided to do this project, where we take a Raspberry Pi and turn an average backpack into a fully functioning computer!" />
				<ParagraphBlock Content="You can also read about the Pi Bag as featured on page 24 of Issue 127 in " Url="https://magpi.raspberrypi.com/issues/127/pdf/download" UrlText="MagPi - The Official Raspberry Pi Magazine" />
				<TitleBlock Content="The Components" />
				<ListBlock Title={[["Raspberry Pi 4 Model B 8GB:", "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/"], ["Sunfounder 7-inch HDMI USB LCD Screen:", "https://www.amazon.ca/gp/product/B07Y889J3X/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"], ["The Bag:", "https://www.amazon.ca/gp/product/B09WVDZH52/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1"], ["Power Source:", "https://www.bestbuy.ca/en-ca/product/kopplen-digital-display-30-000-mah-22-5w-fast-charging-usb-power-bank-black/15660137"]]} Content={["Since we want this computer to be able to do as much as possible I went with the latest and fastest version of the Raspberry Pi 4, however, you can use any Raspberry Pi model you would like", "This 7-inch USB-powered screen is perfect for this project. Since our battery can output a whopping 22.5W to our Raspberry Pi we take advantage of this by using a USB-powered screen as opposed to one using a 12v power adapter. Another bonus is that the USB connection allows for touch capability on the screen.", "For this project, you can use any bag you’d like, however, if you want to follow along with my exact setup I would suggest getting a bag that has a built-in USB port on the outside of the pack as well as a flat surface large enough to mount the screen. Getting a bag with lots of internal space is beneficial as well since the components of the project take up quite a bit of room", "The power source for this bag is a massive 30 Amp Hour portable power bank. On a full charge, this should give you around 8 hours of battery power for the Pi, provided you don't use the bank on other devices. As with the other components of this project, this is also up to your discretion the only requirement being that the power bank has a maximum output of at least 20 watts."]}></ListBlock>
				<TitleBlock Content="3D Printed Parts" />
				<CollectionImageBlock Url={["/pi-bag-usb-casing.stl", "/pi-bag-screen-cutting-guide.stl", "/pi-bag-screen-unit.stl", "/pi-bag-computer-unit.stl"]} ImgUrl={["/pi-bag-usb-casing.png", "/pi-bag-screen-cutting-guide.png", "/pi-bag-screen-unit.png", "/pi-bag-computer-unit.png"]} ImgAlt={["", "", "", ""]} CaptionText="Click on the image to download the .stl file. All models were made in TinkerCAD"/>
				<ListBlock Content={["USB Casing - as mentioned previously, I chose a bag with a built-in USB port, however, it was Type A and we want to use a Type C cable here. In order to fit the cable in the port we need to change the shape of the Type C cable with this casing", "Screen Cutting Guide - in order to make cutting out the hole for the screen easier, we can use this cutting guide", "Screen Unit - this holds the screen on the bag. The Sunfounder display comes with standoffs that will be used on the bottom half of the casing. The top of the casing is designed with a pinhole pattern so we can sew it to the bag. Note that this setup is not waterproof at all, which is a consideration for upgrades down the line", "Computer Unit - this holds the Pi and power source. This is a friction-fit design where the power bank holds the Pi in place. It also has tabs with pinholes for sewing the unit to the bag"]} />
				<TitleBlock Content="Block Diagram" />
				<CaptionImageBlock Url="/pi-bag-block-diagram.png" ImgUrl="/pi-bag-block-diagram.png" ImgAlt="Block diagram for project cabling" CaptionText="This diagram shows all the cable connections for the project. Many of them are simply for ease of access so if you want to use the least amount of wires you can ignore any connection to the “Input Output” block."/>
				<ParagraphBlock Content="The cables used are:"/>
				<ListBlock Content={["Ethernet Male to Female", "Type A 2.0 Male to Female", "Type A 3.0 Male to Female x3", "Type A 2.0 Male to Micro Male", "Type C Male to Male", "Micro HDMI Male to HDMI Male", "Micro HDMI Male to HDMI Female", "Aux Cord Male to Female", "Type C Male to Female"]}/>
				<TitleBlock Content="Assembly" />
				<OrderedListBlock Title={["Screen:"]} Content={["Take the top cover for the screen unit and find a flat surface on the bag where you can attach it", "Once you've found a spot take the cutting guide and use it to trace out the area you will cut. Note that most bags have multiple layers of material", "Cut out the hole for the screen, making sure there is enough overhanging material to sew the top cover to", "Screw the standoffs for the screen into the bottom cover.", "Place the screen into the bottom cover ensuring the ports are facing the cutout. Then place it into the desired pocket", "Line up the top and bottom pieces of the cover, ensuring the screw holes line up with the standoffs underneath.", "Screw them together by placing screws through the holes on the front cover, ensure the heads of the screws are large enough to catch the top cover"]}/>
				<OrderedListBlock Title={["Computer:"]} Content={["Slide the Raspberry Pi into its spot in the housing.", "Slide the power bank underneath the Raspberry Pi, securing it in place. Ensure that the display and ports on the power bank are facing the side that is unobstructed", "Place housing in the desired pocket, cutting out the lining if required.", "If the pocket is very large you can sew the housing in place. In my case, the fit is tight enough that it does not move"]} />
				<OrderedListBlock Title={["Charging Cable:"]} Content={["Attach one end of the cable to the Type C port of the power bank.", "Thread the wire through the bag to the port. Note you may have to cut into the lining of the bag from inside the pocket", "Once you have the cable inside the bag USB port, glue the spacer onto the Type C cable", "Glue the cable into the bags port"]} />
				<OrderedListBlock Title={["Other Cables:"]} Content={["Take the other cables and attach them following the schematic diagram, cutting the lining where needed"]} />
				<TitleBlock Content="Final Notes" />
				<ParagraphBlock Content="There you have it! Your own Raspberry Pi Bag. There is virtually no additional setup required, except for configuring the screen. Follow the instructions provided by Sunfounder in order to get the screen functioning correctly" Url="https://docs.sunfounder.com/projects/ts-7/en/latest/quick_user_guide.html" UrlText={"here"} />
			</ProjectArticle>
    	<ProjectMaterialList AccentColor={AccentColor}>
				<PartBlock Url={["https://www.canakit.com/raspberry-pi-4-extreme-aluminum-case-kit.html"]} ImgUrl={["/raspberry-pi-4.jpg"]} PartName={["CanaKit Raspberry Pi 4 EXTREME Kit"]} ExtraText={["CA$ 259.95"]} AccentColor={AccentColor} />
				<PartBlock Url={["https://www.amazon.ca/gp/product/B07Y889J3X/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&th=1"]} ImgUrl={["/sunfounder-display.jpg"]} PartName={["SunFounder Raspberry Pi 4 Display Touchscreen 7 Inch HDMI 1024×600"]} ExtraText={["CA$ 78.98"]} AccentColor={AccentColor} />
				<PartBlock Url={["https://www.amazon.ca/gp/product/B09WVDZH52/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&th=1"]} ImgUrl={["/raspberry-pi-bag.jpg"]} PartName={["Laptop Backpack 15.6 Inch, Business Travel"]} ExtraText={["CA$ 59.99"]} AccentColor={AccentColor} />
				<PartBlock Url={["https://www.bestbuy.ca/en-ca/product/kopplen-digital-display-30-000-mah-22-5w-fast-charging-usb-power-bank-black/15660137"]} ImgUrl={["/pi-bag-power-bank.png"]} PartName={["Kopplen Digital Display 30,000 mAh Fast Charging USB Power Bank"]} ExtraText={["CA$ 74.99"]} AccentColor={AccentColor} />
				<PartBlock Url={["https://www.amazon.ca/gp/product/B08S6WGZ1F/ref=ppx_od_dt_b_asin_title_s02?ie=UTF8&psc=1"]} ImgUrl={["/pi-bag-audio-extension.jpg"]} PartName={["UGREEN 3.5mm Audio Extension Cable Adapter Male to Female"]} ExtraText={["CA$ 11.30"]} AccentColor={AccentColor} />
				<PartBlock Url={["https://www.amazon.ca/gp/product/B00P0ES0VC/ref=ppx_od_dt_b_asin_title_s02?ie=UTF8&psc=1"]} ImgUrl={["/pi-bag-usb-3-extender.jpg"]} PartName={["UGREEN USB Extension Cable USB 3.0 Type A Male to Female"]} ExtraText={["CA$ 9.34"]} AccentColor={AccentColor} />
				<PartBlock Url={["https://www.amazon.ca/gp/product/B08R63ZM6Q/ref=ppx_od_dt_b_asin_title_s02?ie=UTF8&psc=1"]} ImgUrl={["/pi-bag-usb-c-extender.jpg"]} PartName={["USB Type C Extension Cable, USB C 3.1 Male to Female 5A"]} ExtraText={["CA$ 15.99"]} AccentColor={AccentColor} />
				<PartBlock Url={["https://www.amazon.ca/gp/product/B08HC5GWZ1/ref=ppx_od_dt_b_asin_title_s02?ie=UTF8&psc=1"]} ImgUrl={["/pi-bag-usb-a-3-extender.jpg"]} PartName={["AINOPE USB 3.0 Extension Cable, Type A Male to Female x2"]} ExtraText={["CA$ 11.99"]} AccentColor={AccentColor} />
				<PartBlock Url={["https://www.amazon.ca/gp/product/B003YKX6VI/ref=ppx_od_dt_b_asin_title_s02?ie=UTF8&psc=1"]} ImgUrl={["/pi-bag-usb-2-extender.jpg"]} PartName={["StarTech USB A 2.0 Extension Cable Male to Female"]} ExtraText={["CA$ 5.58"]} AccentColor={AccentColor} />
				<PartBlock Url={["https://www.amazon.ca/gp/product/B09TDGZMYM/ref=ppx_od_dt_b_asin_title_s01?ie=UTF8&th=1"]} ImgUrl={["/pi-bag-micro-usb.jpg"]} PartName={["Canjoy Micro USB to Micro USB Cable Data Cable"]} ExtraText={["CA$ 9.99"]} AccentColor={AccentColor} />
				<PartBlock Url={["https://www.amazon.ca/gp/product/B00A30FELW/ref=ppx_od_dt_b_asin_title_s01?ie=UTF8&psc=1"]} ImgUrl={["/pi-bag-hdmi-coupler.jpg"]} PartName={["UGREEN HDMI Coupler HDMI Adapter Female to Female"]} ExtraText={["CA$ 11.99"]} AccentColor={AccentColor} />
				<PartBlock Url={["https://www.amazon.ca/gp/product/B08JPJD5Y4/ref=ppx_od_dt_b_asin_title_s01?ie=UTF8&th=1"]} ImgUrl={["/pi-bag-type-c.jpg"]} PartName={["INIU USB C Cable, 3.1A QC USB Type C Cable"]} ExtraText={["CA$ 21.99"]} AccentColor={AccentColor} />
				<PartBlock Url={["https://www.amazon.ca/gp/product/B015GR44CG/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1"]} ImgUrl={["/bi-bag-hdmi-cable.jpg"]} PartName={["UGREEN Micro HDMI to HDMI Male to Male x2"]} ExtraText={["CA$ 9.49"]} AccentColor={AccentColor} />
				<PartBlock Url={["https://www.amazon.ca/gp/product/B07F3VVX47/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&th=1"]} ImgUrl={["/pi-bag-ethernet-extender.jpg"]} PartName={["J&D Ethernet Extension Cable Cat6 / Cat5e / Cat5"]} ExtraText={["CA$ 24.95"]} AccentColor={AccentColor} />
			</ProjectMaterialList>
		</ProjectWrapper>
		</>
	);
}

export default PiBag;