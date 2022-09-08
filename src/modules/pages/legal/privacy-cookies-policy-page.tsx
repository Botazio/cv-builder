import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import { Collapse } from "@mui/material";
import SpaceDivider from "common/components/atoms/dividers/space-divider/space-divider";
import LayoutCard from "common/components/layouts/layout-card/layout-card";
import LayoutCardBody from "common/components/layouts/layout-card/layout-card-body/layout-card-body";
import LayoutCardHeader from "common/components/layouts/layout-card/layout-card-header/layout-card-header";
import SectionBody from "common/components/layouts/layout-card/layout-card-section/section-body/section-body";
import SectionHeader from "common/components/layouts/layout-card/layout-card-section/section-header/section-header";
import { useState } from 'react';

export default function PrivacyCookiesPolicyPage() {
  const [activeSections, setActiveSections] = useState<boolean[]>([
    true,
    true,
    true,
    true
  ]);

  /**
   * @position index in the array
   */
  const handleClick = (position: number) => {
    const updatedActiveSections = activeSections.map((item: boolean, index: number) =>
      index === position ? !item : item
    );

    setActiveSections(updatedActiveSections);
  };


  return (
    <LayoutCard header={
      <>
        <SpaceDivider variant="large" />
        <LayoutCardHeader title="Privacy & cookies policy" />
      </>
    }>

      <LayoutCardBody>
        <SectionHeader icon={<CookieOutlinedIcon />} title="What are cookies?" handleClick={() => handleClick(0)} />
        <Collapse in={activeSections[0]}>
          <SectionBody>
            <p>
              Cookies are small text files that websites place and store on the computers and mobile devices of their users.
              These files are generally used to improve the user experience, but may contain personal information about the user or their behavior on the website.
            </p>
          </SectionBody>
        </Collapse>

        <SectionHeader icon={<CategoryOutlinedIcon />} title="Types of cookies this page uses" handleClick={() => handleClick(1)} />
        <Collapse in={activeSections[1]}>
          <SectionBody>
            <p>
              The page only uses one cookie to persist the form information and another to store your cookies preferences.
              <br /><br />
              The one to persist the form information was put in place so you can leave or refresh the site and the information you entered previously will be saved.
              This way, you don't have to enter the same information twice!
              <br /><br />
              No third party cookies are used on this site.
            </p>
          </SectionBody>
        </Collapse>

        <SectionHeader icon={<DeleteOutlineRoundedIcon />} title="How to remove cookies" handleClick={() => handleClick(2)} />
        <Collapse in={activeSections[2]}>
          <SectionBody>
            <p>
              In case you accepted the cookies and you changed your mind about them, you can always remove them using your browser options.
              <br /><br />
              Once removed, you will be asked again if you accept to store cookies on your computer the next time you connect to the application.
              Click on reject and you can keep using the page without cookies.
              <br /><br />
              Keep in mind that if you don't accept cookies, your information won't be saved and you will have to enter the same details every time you use the app.
            </p>
          </SectionBody>
        </Collapse>

        <SectionHeader icon={<QuestionMarkRoundedIcon />} title="Which information is collected?" handleClick={() => handleClick(3)} />
        <Collapse in={activeSections[3]}>
          <SectionBody>
            <p>
              No information is collected at all!
              <br />
              In fact, your data doesn't leave your own device, the whole template generation occurs locally in the browser. This way, you can be sure your personal information is safe.
            </p>
          </SectionBody>
        </Collapse>

      </LayoutCardBody>

    </LayoutCard>
  );
}
