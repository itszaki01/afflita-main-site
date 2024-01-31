import { Button, Group, Image, ScrollArea, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { mainColor } from "../../theme";
import { useDevicesContext } from "../../context/DevicesContext";
import { IconBrandTelegram, IconBrandWhatsapp, IconExclamationCircle, IconSettings } from "@tabler/icons-react";
import LogoImg from "../../assets/afflita-logo.png";
import DemoCountry from "../../components/DemoCountry";
import TitleDevider from "../../components/TitleDevider";
import countryDemos from "../../constants/countryDemos";
import Feature from "../../components/Feature";
import features from "../../constants/features";
import SecondryTitle from "../../components/SecondryTitle";
import SimpleTitle from "../../components/SimpleTitle";
export default function Home() {
    //ResponsiveSettings
    const { isTabletAndMobile } = useDevicesContext();

    return (
        <>
            <ScrollArea w={"100%"} h={"100vh"} bg={"#151019"} p={5} dir="rtl">
                <Stack align="center" w={isTabletAndMobile ? "100%" : "80%"} m={"auto"}>
                    <Group justify="center" gap={0}>
                        <Image w={120} h={120} src={LogoImg} />
                        <Stack gap={0} align="center">
                            <Title>قالب متجر أفليتا</Title>
                            <SecondryTitle string="أفضل قالب للدفع عند الإستلام"/>
                        </Stack>
                    </Group>

                    <iframe
                        width={"80%"}
                        height={500}
                        src="https://www.youtube.com/embed/MlOKixArUXA"
                        title="YouTube video player"
                        style={{ border: `2px solid ${mainColor}`, borderRadius: 5 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />

                    <TitleDevider string="كيف سيبدو متجرك" />
                    <SecondryTitle string="إختر البلد:" />
                    <Group gap={3} bg={"#b18a0099"} p={10} style={{ borderRadius: 5, border: `2px solid ${"#FAD02C"}` }}>
                        <IconExclamationCircle />
                        <Text fw={700}>ملاحظة: أسعار المنتجات قد تبدو عشوائية</Text>
                    </Group>
                    <Group maw={isTabletAndMobile ? 600 : "60%"} justify="center">
                        {countryDemos.map((country, idx) => (
                            <DemoCountry key={idx} link={country.to} icon={country.flagIcon} />
                        ))}
                    </Group>
                    <SecondryTitle string="+جميع الدول العربية..." />
                    <Button size="lg" onClick={() => window.open("https://demo.afflita.com/admin", "_blank")} rightSection={<IconSettings />}>
                        معاينة لوحة التحكم
                    </Button>
                    <TitleDevider string="مميزات المتجر" />
                    <SimpleGrid cols={isTabletAndMobile ? 1 : 2} spacing={10} verticalSpacing={10}>
                        {features.map((fut, idx) => (
                            <Feature key={idx} string={fut} />
                        ))}
                    </SimpleGrid>
                    <SecondryTitle string="+والمزيد من المميزات الرائعة..." />
                    <TitleDevider string="أحصل على نسختك الآن" />
                    <SecondryTitle string="شروط الخدمة:" />
                    <SimpleTitle>1- عند شراءك لنسخة من المتجر سنعطيك الصلاحيات حسب الدومين.</SimpleTitle>
                    <SimpleTitle>2- إن كنت تريد تغيير الدومين الخاص بك فهذا سيكلفك 20 دولار بدل من إعادة شراء القالب.</SimpleTitle>
                    <SimpleTitle>3- عند شراءك للقالب ستحصل على رمز سري خاص بك، هو بمثابة كلمة السر فلايجب أن يضيع منك.</SimpleTitle>
                    <SecondryTitle string="أسعار القالب:" />
                    <Group gap={5} wrap="nowrap" style={{ padding: 10, border: `1px solid ${mainColor}`, borderRadius: 5 }}>
                        <SimpleTitle>دومين واحد</SimpleTitle>{" "}
                        <Title order={2} fw={700} c={"green"}>
                            69$
                        </Title>{" "}
                        بدل{" "}
                        <Title order={2} fw={700} c={"red"} td={"line-through"}>
                            89$
                        </Title>
                    </Group>

                    <Group gap={5} wrap="nowrap" style={{ padding: 10, border: `1px solid ${mainColor}`, borderRadius: 5 }}>
                        <SimpleTitle>2 دومين</SimpleTitle>{" "}
                        <Title order={2} fw={700} c={"green"}>
                            115$
                        </Title>{" "}
                        بدل{" "}
                        <Title order={2} fw={700} c={"red"} td={"line-through"}>
                            138$
                        </Title>
                    </Group>

                    <Group gap={5} wrap="nowrap" style={{ padding: 10, border: `1px solid ${mainColor}`, borderRadius: 5 }}>
                        <SimpleTitle>3 دومين</SimpleTitle>{" "}
                        <Title order={2} fw={700} c={"green"}>
                            175$
                        </Title>{" "}
                        بدل{" "}
                        <Title order={2} fw={700} c={"red"} td={"line-through"}>
                            207$
                        </Title>
                    </Group>

                    <SecondryTitle string="تواصل معنا للطلب:" />
                    <Group mb={100}>
                        <Button size="lg" rightSection={<IconBrandTelegram />} onClick={()=> open('https://t.me/afflita','_blank')}>
                            TELEGRAM
                        </Button>
                        <Button size="lg" color={"green"} rightSection={<IconBrandWhatsapp />} onClick={()=> open('https://wa.me/213559388573','_blank')}>
                            WHATSAPP
                        </Button>
                    </Group>
                </Stack>
            </ScrollArea>
        </>
    );
}
