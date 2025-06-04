import { faBox, faCab, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import api from "../../../api/axios";
import DashboardStatCard from "../../../components/DashboardStatCard";
import useAuth from "../../../routes/useAuth";

type Profile = {
  bio?: string;
  firstName?: string;
  lastName?: string;
  website?: string;
  avatar?: string;
  // add other profile fields as needed
};

export default function ProfilePage() {
  const auth = useAuth();
  const [profile, setProfile] = useState<Profile>({});

  const stats = [
    {
      title: "Trips Completed",
      value: "2,456",
      change: "+12%",
      icon: faCab,
      variant: "primary",
    },
    {
      title: "Cost",
      value: "$9,845",
      change: "+18%",
      icon: faChartBar,
      variant: "success",
    },
    {
      title: "Products",
      value: "1,234",
      change: "+5%",
      icon: faBox,
      variant: "info",
    },
    {
      title: "Pending Orders",
      value: "56",
      change: "-2%",
      icon: faBox,
      variant: "warning",
    },
  ];

  const getUserProfile = async () => {
    try {
      const { data } = await api.get(`/auth/user/profile`);
      setProfile(data);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <Row>
      <Col lg={3}>
        <div className="d-flex flex-column justify-content-start align-items-center mt-5">
          <img
            className="py-2 mb-3 rounded-circle"
            width="150px"
            src={profile?.avatar}
          />

          <h3>{`${profile?.firstName} ${profile?.lastName}`}</h3>
          <span>{auth?.user?.user?.email}</span>
          <cite>{profile.website}</cite>
        </div>
      </Col>
      <Col lg={9} className="mt-5">
        <DashboardStatCard status={stats} />
        <Row className="">
          <Col lg={12} className="d-flex flex-column gap-2">
            <Card>
              <Card.Header>Bio</Card.Header>
              <Card.Body>{profile?.bio}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
