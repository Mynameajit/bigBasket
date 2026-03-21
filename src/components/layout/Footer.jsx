import { Box, Grid, Stack, Typography } from "@mui/material";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#0b0b0b", color: "#fff", mt: 6 }}>
      {/* 🔹 Top Section */}
      <Stack
        sx={{
          width: { xs: "100%", md: "80%" },
          marginX: "auto",
        }}
      >
        <Grid container spacing={4} sx={{ px: 6, py: 5 }}>
          {/* Left Links */}
          <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
          <Grid item xs={12} md={3}>
            <Typography fontWeight="bold" mb={2}>
              Bigbasket
            </Typography>
            {[
              "About Us",
              "In News",
              "Green bigbasket",
              "Privacy Policy",
              "Affiliate",
              "Terms and Conditions",
              "bb Daily",
            ].map((item) => (
              <Typography
                key={item}
                sx={{ fontSize: 13, mb: 1, cursor: "pointer" }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* Help */}
          <Grid item xs={12} md={3}>
            <Typography fontWeight="bold" mb={2}>
              Help
            </Typography>
            {[
              "FAQs",
              "Contact Us",
              "bb Wallet FAQs",
              "bb Wallet T&Cs",
              "Vendor Connect",
            ].map((item) => (
              <Typography
                key={item}
                sx={{ fontSize: 13, mb: 1, cursor: "pointer" }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* Logo + App */}
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: 22, fontWeight: "bold" }}>
              bigbasket
            </Typography>

            <Typography sx={{ fontSize: 12, mb: 2 }}>
              A TATA Enterprise
            </Typography>

            {/* App buttons */}
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                width="140"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                width="140"
              />
            </Box>

            {/* Social */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaPinterest />
            </Box>
          </Grid>
          </Stack>

        </Grid>

        {/* 🔹 Divider */}
        <Box sx={{ borderTop: "1px dashed #444", mx: 6 }} />

        {/* 🔹 Cities Section */}
        <Box sx={{ px: 6, py: 4 }}>
          <Typography textAlign="center" mb={2} fontWeight="bold">
            Cities We Serve
          </Typography>

          <Typography sx={{ fontSize: 12, lineHeight: 2, color: "#ccc" }}>
            Abohar | Abu Road | Achampet | Achrol | Adampur | Addanki | Agra |
            Ahmedabad | Ajmer | Aligarh | Allahabad | Alwar | Amritsar | Anand |
            Bangalore | Bareilly | Bhopal | Bhubaneswar | Chandigarh | Chennai |
            Coimbatore | Dehradun | Delhi | Faridabad | Ghaziabad | Gurgaon |
            Hyderabad | Indore | Jaipur | Jalandhar | Kanpur | Kochi | Kolkata |
            Lucknow | Ludhiana | Madurai | Mangalore | Mumbai | Mysore | Nagpur
            | Nashik | Noida | Patna | Pune | Raipur | Ranchi | Surat | Thane |
            Trivandrum | Udaipur | Vadodara | Varanasi | Vijayawada Bantwal |
            Bapatla | Barabanki District | Barakar | Baran | Baraut | Bardhaman
            | Bardoli | Bareilly | Bareja | Bareli | Bargarh | Barh | Barhaj |
            Barhalganj | Barhi | Bari Sadri | Baripada | Bariya | Barmer |
            Barnala | Barodia | BARPETA | Barwani | Basavakalyan | Basavana
            Bagewadi | Basirhat | Bassi | BassiRJ | Bastar | Basti | Batala |
            Bathinda | Bavla | Bayana | Beawar | Begowal | Begumganj | Begusarai
            | BEHRAMPUR | Bejjanki | Belgaum | Bellampalli | Bellary |
            Belthangady | Belur | BEMETARA | BENIPATTI | BENIPUR | Beohari |
            Berachampa | Berasia | Berhampur | Berinag | Betamcherla |
            Bethamangala | Bettiah | Betul | Bhadaur | Bhaderwah | Bhadohi |
            Bhadrachalam | Bhadradri Kothagudem District | Bhadrak | Bhadrak
            District | BHAGALPUR | Bhagpat | Bhainsa | Bhalki | Bhandara |
            Bhangar | BHANJANAGAR | Bhanpura | BHARATPUR | Bharuch | BHARWARA |
            Bhatewar | Bhathat | Bhatkal | Bhavnagar | Bhawani Mandi |
            Bheemunipatnam | Bhilwara | Bhimadole | Bhimavaram | Bhimtal | Bhind
            | Bhinga | Bhinmal | Bhiwadi | Bhiwani | Bhogapuram | Bhojpur |
            Bhongir | Bhopal | Bhopal Rural | BHORE | BHUBAN |
            Bhubaneshwar-Cuttack | Bhubaneswar | Bhubaneswar Rural | Bhupalpally
            | Bhuvanagiri | Bichhiya | BIDAR | Bidar District | Bidhuna | Bihar
            Sharif | Bihta | Bijainagar | Bijapur | BIJNOR | Bijpur | Bikaner |
            Bikkavolu | Bilara | Bilaspur(CGH) | Bilaspur-HP | Bilaspur-HR |
            Bilaspur-UP | Bilimora | Billawar | Bina | Binaganj | Birbhum |
            BIRPARA | Bisalpur | Bishnupur | Biswanath | Boath Buzurg | Bobbili
            | Bodhan | BOKAKHAT | Bokaro | Bolpur | Bonakal | BONGAIGAON |
            BONGAON | Bonli | Borsad | Botad | Boudh | BRAHMAPUR | BRAJRAJNAGAR
            | Brijmanganj | Budaun | Buhana | Bulandshahr | Bulandshahr District
            | Bundi | Burhanpur | Butibori | Buxar | Byadagi | Byadgi | Byndoor
            | Byrnihat | Cachar | Canning | Chagalamarri | ChakiaUP | Chaklasi |
            Chaksu | Chalakudy | Challakere | Chamarajanagar | Chameli | Chamoli
            | Champhai | CHANDANKIYARI | Chandauli | Chandausi | CHANDBALI |
            Chanderi | Chandigarh Tricity | CHANDIKHOL | Chandpur | Chandrapur |
            Chandur Bazar | Changanacherry | Changlang | Channagiri |
            Channapatna | Channarayapatna | Channarayapattana | Charkhi Dadri |
            Chatra | Chaumahla | Chavassery | Chembakur | Chengannur | Chennai |
            Chennai Rural | Cherial | CHERLA | Cherpulassery | Chetpet | Cheyyar
            | CHHAPRA | Chhatarpur | CHHENDIPADA | Chhibramau | Chhindwara |
            Chhoti Sadri | Chhutmalpur | CHIKITI | Chikkaballapura District |
            Chikkamagalur | Chikkanayakanahalli | Chikodi | Chilakaluripet |
            Chimakurthy | Chincholi | Chingavanam | Chinhat | Chinnasalem |
            Chinnur | Chintalpudi | Chintamani | Chintapalli | Chintoor |
            Chintpurni | Chirala | Chiramanangad | Chirgaon | Chitradurga |
            Chitrakoot | Chittapur | Chittaranjan | Chittaurgarh | Chittoor
            District | Chittor District | Chodavaram | Cholapur | Chomu | Chopan
            | Choppadandi | Chotila | Choutuppal | chungatra | Chunnar | Churu |
            Cochin | Coimbatore | Coimbatore Rural | Colonejganj | COOCHBEHAR |
            Coonoor | Cuddalore | Cuddapah | Cumbum | CumbumAP | Cuttack |
            Dabaspete | Dabra | Dadri | Dahegam | Dahegaon | Dalhousie |
            Dalpatpura | Daman | Damoh | Dandeli | Dantewada | Danthalapally |
            Darbhanga | Dariyabad | DARJEELING | Darjiling | Darrang | Daryapur
            Banosa | DASPALLA | Dasuya | Dataganj | DATIA | Dausa | Davangere |
            Debagarh | Deesa | Degana | DehraDun | Delhi | Denkanikottai |
            Dentam | DeogarhRJ | Deoghar | Deoli-RJ | Deoria | Deosar | Deotalab
            | Dera Bassi | Devadurga | Devarakonda | Dewas | DHAKA | DHAKUAKHANA
            | Dhalai | Dhamnod | Dhampur | Dhamtari | Dhanbad | Dhandhuka |
            Dhanghata | Dhar | Dharamkot | Dharampur | Dharapuram | Dharchula |
            Dhariyawad | Dharmapuri-TS | Dharwad | Dhaurahara | Dhemaji |
            Dhenkanal | DHOLI | Dholka | Dholpur | Dhone | Dhubri | Dhuri |
            Dibai | DIBRUGARH | Didihat | Didwana | DIGAPAHANDI | DIGBOI |
            Dildar Nagar | Dimapur | Dinanagar | DINARA | Dindigul | DINHATA |
            Diu | Doddaballapura | Doiwala | Domariyaganj | DOOMDOOMA | Doranala
            | Dostpur | Draksharamam | Dudhinagar | Dudu | Dulchehra | DULIAJAN
            | Dullahpur | Dumka | Dumraon | Dungarpur | Durg | Dwarahat |
            Dwaraka Tirumala | East Champaran | East Garo Hills | East Godavari
            District | East Kameng | East Khasi Hills | East Midnapore | East
            Siang | East Sikkim | East Singhbhum | East-Godavari-2 | Edappal |
            Edavanna | Eedu | EKMA | Eluru | Eral | Erode | Etah | Etawah |
            Ezhupunna | Faizabad | Falna | Faridabad | Faridkot | Faridpur |
            Farrukhabad | Fatehabad | Fatehgarh | Fatehgarh Sahib District |
            Fatehnagar | Fatehpur | Fatehpur-RJ | Fazilka | Firozabad | Firozpur
            | Gadag | Gadarwara | Gadwal | Gahmar | Gairsain | Gajapati |
            Gajapatinagaram | Gajraula | Galiveedu | GALLERI | Ganga Nagar |
            Gangapur City | Gangapur-RJ | Gangavathi | Ganj Basoda | Ganjam |
            Ganjam | Ganjdundwara | Gannavaram | Garhshanker | Garhwa |
            Gariaband | Garividi | GARJANPUR | Garkha | Garoth | Gauribidanur |
            Gautam Buddha Nagar District | Gaya | Ghanpur | Ghansali | Gharsana
            | Ghatampur | Ghati Billan | Ghator | Ghaziabad | Ghazipur | Ghosi |
            Ghughus | Ghugri | Ghumarwin | Giddarbaha | Giridh | Goa |
            Goa-Panaji | Goalpara | Gobichettipalayam | Godda | Godhra |
            GOGAMUKH | Gogunda | Gohana | Gokak | Gokavaram | GOLAGHAT | Gonda
            District | Gondia | Gonikoppal | Gooty | GOPALAPUR | Gopalganj |
            GOPALNAGAR | Gopiganj | Gorakhpur | Gorantla | Gotan | Gudalur |
            Gudivada | Gudiyatham | Gudiyattam | Gudur | Gudur-TS | Gulbaraga |
            Gulbarga | GUMIA | Gumkhal | Gumla | Gummudipoondi | Guna |
            Gundlupet | Guntakal | Guntur | Guntur-Rural | Gurdaspur | Gurgaon |
            Gurmatkal | Gursahaiganj | Gurugram Rural | Guruvayoor | Guskhara |
            Guwahati | Guwahati Rural | Gwalior | Habra | Hagaribommanahalli |
            Haidargarh | Hailakandi | Hajipur | Haldia | Haldwani | Halflong |
            Haliyal | Hamirpur | Hamirpur-UP | Hanamkonda | Hangal | Hansi |
            Hanskhali | Hanumangarh | Hanur | Hapur | Harda | Hardoi | Haridwar
            | Harihara | Haripad | Haripal | Haripurdhar | Harpanahalli | Harur
            | Haryana | HARYANA_3PL | Hasanpur | Hasnabad | Hassan | Hathras |
            Hatta | Haveri | Hayathnagar | Hazaribag | HELENCHA | Herbertpur |
            HILSA | Himachal Pradesh | HIMACHAL PRADESH_3PL | Himatnagar |
            Hindaun | Hindupur | HINGALGANJ | HINJILICUT | Hiranagar | Hirekerur
            | Hirenagavalli | Hiriyur | Hisar | Holenarasipur | Honnali |
            Honnavar | Hooghly | Hooghly District | Hoovina Hadagali | Hosadurga
            | Hosanagar | Hoshangabad | Hoshiarpur | Hospet | Hosur | Howrah |
            Hubli | Huliyar | Humnabad | Hunsur | Husnabad | Huzur Nagar |
            Huzurabad | Hyderabad | Hyderabad Rural | Ichchapuram | Ichoda |
            Iddukki | Ikauna | ILIPUR | Ilkal | IMAMGANJ | Imphal West | Indi |
            Indore | Indore Rural | Irinjalakuda | Itarsi | Itava | Itawa | Itia
            Thok | Jabalpur | Jadcherla | Jagaluru | JAGANNATHPRASAD |
            Jagatsinghapur | Jagatsinghpur | JAGDISHPUR | Jagraon | Jagtial |
            Jahangirabad | Jahu | JAIGAON | Jainoor | Jaintia Hills | Jaipur |
            Jaipur Rural | Jaisalmer | Jaisinghnagar | Jaitwara | Jajapur |
            Jajpur | Jakh | Jalalabad | Jalalpur | Jalalpur-UP | Jalandhar |
            Jalaun | Jalesar | Jalna | Jalore | JALPAIGURI | Jalwa | Jamkhandi |
            Jammikunta | JAMMU & KASHMIR_3PL | Jammu Kashmir | Jamshedpur |
            Jamtara | Jamui | Jamuria | Jangaon | Jangareddygudem |
            Janjgir-champa | Jannaram | Jaora | Jashpur | Jatara | Jaunpur |
            Jawad | Jayankondam | Jehanabad | Jewar | Jewargi | Jhabua | Jhadol
            | Jhajjar | Jhalawar | JHANJHARPUR | Jhansi | Jhargram | Jharsuguda
            | Jhunjhunu | Jhunku | Jiyanpur | Jodhpur | Joginder Nagar | Jogipet
            | JORHAT | Joshimath | Jubbal | Jukhala | Junnardeo | Kadaba |
            Kadapa | Kadi | Kadiri | KADOBAHAL | Kadpadi | Kadur | Kaghaznagar |
            Kaikaluru | Kaimur (Bhabua) | Kaithal | Kakinada | Kalaburagi |
            Kalahandi | Kalakada | Kalamb | Kalasa | Kalghatgi | Kalinga Nagar |
            Kallakurichi | Kallikkad | Kalluru | Kalmeshwar | Kalna | Kalol |
            KalolHP | Kalpetta | Kalwakurthy | Kalyandurg | KALYANI |
            KAMAKHYANAGAR | Kamareddy District | Kambadur | Kamptee | Kamrup |
            Kanakapura | Kanchipuram | Kandhamal | Kandukur | Kangan | Kangeyam
            | Kangra | Kanigiri | Kanjarakatte | Kanjiramattom | Kanker |
            Kannapuram | Kannauj | Kannur | Kanpur | Kanthi | Kapadvanj |
            Kapasan | Kaptanganj | Kapurthala | Karaikal | Karaikudi | Karauli |
            Karbi Anglong | Karera-MP | Karim Nagar | Karimba | Karimganj |
            Karimnagar | Karkala | Karnal | Karsog | Karukachal | Karur | Karwar
            | Kasaragod | Kasganj | Kashipur | Katangi | Kathar | Kathipudi |
            Kathua | Katihar | Katni | Katol | Kattappana | Katwa | Kaundkera |
            Kauriram | Kavali | Kawardha | Kayamkulam | Kazipet | Kekri |
            Kelwara | Kendrapara | Kendujhar | Kerakat | Kerur | Kesali |
            Keshoraipatan | Keylong | Khadda | Khagaria | Khairabad | Khajuraho
            | KHALARI-JR | Khalilabad | Khambhat | Khammam | Khanapur |
            Khanapur-TS | Khandela | Khandwa | Khanna | Khanpur | Kharagpur |
            Khargone | Khatauli | Khategaon | Khatima | Khatu Khurd | Kheda |
            Kheragarh | Khergam | Kheri | Kherwara | Khimsar | Khinwara |
            KHIZASARAI | KHODAGANJ | Khorda | Khordha | KHUNTI | Khurai | Khutar
            | Kilimanoor | Kinnaur | Kiphire | Kishanganj | Kishangarh | Kishni
            | Kittur | Kochi | Kochi Rural | Kodad | Kodaikanal | KODALA |
            Koderma | Kodumudi | Kodungallur | Koduru | Kokrajhar | kolar |
            Kolasib | Kolayat | Kolhapur | Kolhar | Kolkata | Kolkata Rural |
            Kollam | Kollapur | Kollegala | KONARK | Konaseema District | Konch
            | KONDAGAON | Kondapi | Kondlahalli | Koothattukulam | Koppal |
            Koraput | Koratagere | Koratla | Korba | Koriya | Koruprolu | Kosgi
            | Kota | Kotagiri | Kotdwara | Kothagudem | Kothapalli | Kotkapura |
            Kotma | Kotputli | Kottarakkara | Kottayam | Kotturu | Kotturu-AP |
            Kovilpatti | Kovvur | Kowthal | Koyilandy | Koyyuru | Kozhenchery |
            Kozhikode | Krishna District | Krishnagiri | Krishnarajanagara |
            Krishnarajngr | Krishnarajpet | KUCHAIKOTE | Kuchaman City |
            KUCHINDA | Kudair | Kudligi | Kukanoor | Kukshi | Kumarganj |
            Kumbakonam | Kumily | Kumta | Kundapura | Kundli | Kunigal | Kuppam
            | Kurnool | Kurugodu | Kurukshetra | Kurupam | Kushalnagar | KUSHI
            NAGAR | Kushinagar | Kushtagi | Kusumanchi | Kuthumkal |
            Kuthuparamba | Kuttiady | Kuttikol | Ladakh |
          </Typography>
        </Box>

        {/* 🔹 Divider */}
        <Box sx={{ borderTop: "1px dashed #444", mx: 6 }} />

        {/* 🔹 Bottom Categories & Brands */}
        <Grid container spacing={4} sx={{ px: 6, py: 4 }}>
          {/* Categories */}
          <Grid item xs={12} md={6}>
            <Typography fontWeight="bold" mb={2}>
              Popular Categories
            </Typography>

            <Grid container spacing={2}>
              {[
                "Sunflower Oils",
                "Milk",
                "Organic F&V",
                "Floor Cleaners",
                "Frozen Veg Food",
                "Wheat Atta",
                "Health Drinks",
                "Namkeen",
                "Other Juices",
                "Diapers & Wipes",
              ].map((item) => (
                <Grid item xs={6} key={item}>
                  <Typography sx={{ fontSize: 13 }}>{item}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Brands */}
          <Grid item xs={12} md={6}>
            <Typography fontWeight="bold" mb={2}>
              Popular Brands
            </Typography>

            <Grid container spacing={2}>
              {[
                "Amul",
                "Red Bull",
                "Yummiez",
                "Britannia",
                "Haldiram's",
                "Nescafe",
                "elite cake",
                "Yera",
                "Wow! Momo",
                "Ferrero",
              ].map((item) => (
                <Grid item xs={6} key={item}>
                  <Typography sx={{ fontSize: 13 }}>{item}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* 🔹 Show More */}
        <Typography textAlign="center" sx={{ cursor: "pointer", mb: 2 }}>
          Show more +
        </Typography>

        {/* 🔹 Bottom Copyright */}
        <Box sx={{ textAlign: "center", pb: 3 }}>
          <Typography sx={{ fontSize: 12, color: "#aaa" }}>
            Copyright © 2025-2027 Supermarket Grocery Supplies Pvt Ltd
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
