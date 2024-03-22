import React, { useState } from "react";
import Input from "./forms/Input";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useRef } from "react";
import Select from "./forms/Select";

const Forms = () => {
  const form = useRef();

  const sendEmail = () => {};
  const [location, setLocation] = useState("");
  const [testType, setTestType] = useState("");
  const [tuitionType, setTuitionType] = useState("");
  const [amount, setAmount] = useState("");

  const handleLocationChange = (event: string) => {
    setLocation(event);
    console.log(event);
    calculateAmount(event, testType, tuitionType);
  };

  const handleTestTypeChange = (event: string) => {
    setTestType(event);
    console.log(event);
    calculateAmount(location, event, tuitionType);
  };

  const handleTuitionTypeChange = (event: string) => {
    setTuitionType(event);
    calculateAmount(location, testType, event);
  };

  const calculateAmount = (
    selectedLocation: React.SetStateAction<string>,
    selectedTestType: React.SetStateAction<string>,
    selectedTuitionType: React.SetStateAction<string>
  ) => {
    let calculatedAmount = 0;

    if (
      (selectedLocation === "Ghana" || selectedLocation === "Abroad") &&
      (selectedTestType === "GMAT" ||
        selectedTestType === "GRE" ||
        selectedTestType === "TOFEL" ||
        selectedTestType === "IELT")
    ) {
      switch (selectedTuitionType) {
        case "OnlineP":
          calculatedAmount = 1300;
          break;
        case "OnlineN":
          calculatedAmount = 600;
          break;
        case "ClassP":
          calculatedAmount = 1600;
          break;
        case "ClassN":
          calculatedAmount = 800;
          break;
        default:
          calculatedAmount = 0;
      }
    } else if (selectedLocation === "Abroad" && selectedTestType === "OET") {
      switch (selectedTuitionType) {
        case "OnlineP":
        case "ClassP":
          calculatedAmount = 250;
          break;
        case "OnlineN":
        case "ClassN":
          calculatedAmount = 170;
          break;
        default:
          calculatedAmount = 0;
      }
    }

    setAmount(
      selectedLocation === "Abroad" && calculatedAmount !== 0
        ? `£ ${calculatedAmount}`
        : `GH₵ ${calculatedAmount}`
    );
  };

  return (
    <form>
      <>
        <section className="grid grid-cols-2 gap-4">
          {/* <div>
            <label>Name</label>
            <Input type="text" name="user_name" required />
          </div> */}
          <Input label="Name" name="user_name" required />

          {/* <div>
            <label>Email Address</label>
            <Input type="email" name="user_email" required />
          </div>   */}
          <Input label="Email" type="email" name="user_email" required />
        </section>

        {/* Add some space between the sections */}
        <div className="mb-[20px]"></div>

        <section className="grid grid-cols-2 gap-4">
          <Input label="Contact" type="tel" name="user_contact" required />

          {/* Dropdown within a TextField */}
          {/* <div>
            <label>Select Location</label>
            <TextField
              select
              value={location}
              onChange={handleLocationChange}
              variant="outlined"
              fullWidth
              name = "location"
            >
              <MenuItem value="">Select an option</MenuItem>
              <MenuItem value="Ghana">Ghana</MenuItem>
              <MenuItem value="Abroad">Abroad</MenuItem>
            </TextField>
          </div> */}
          <Select
            onValueChange={(val) => {
              if (Array.isArray(val)) {
                // val is an array, handle the case where it's an array
                if (val.length > 0 && val[0]?.id === "gh") {
                  handleLocationChange("Ghana");
                }
              } else {
                // val is not an array, handle the case where it's a single object
                if (val?.id === "gh") {
                  handleLocationChange("Ghana");
                }
              }
            }}
            // onChange={handleLocationChange}
            name="location"
            label="Select Location"
            options={[
              { id: "gh", label: "Ghana", value: "Ghana" },
              { id: "intl", label: "Abroad", value: "Abroad" },
            ]}
          />
          {/* <div>
            <label>Select test type</label>
            <TextField
              select
              value={testType}
              onChange={handleTestTypeChange}
              variant="outlined"
              fullWidth
              name="test_type"
            >
              <MenuItem value="">Select an option</MenuItem>
              <MenuItem value="OET">OET</MenuItem>
              <MenuItem value="GMAT">GMAT</MenuItem>
              <MenuItem value="GRE">GRE</MenuItem>
              <MenuItem value="TOFEL">TOFEL</MenuItem>
              <MenuItem value="IELT">IELT</MenuItem>
            </TextField>
          </div> */}
          <Select
            // onValueChange={(val) => {
            //   if (val?.[0].id == "gh") {
            //     handleLocationChange("Ghana")
            //   } else if (val?.[0].id == "intl") {
            //     handleLocationChange("Abroad")
            //   }
            // }}

            onChange={(e) => {
              handleTestTypeChange(e?.target.value ?? "");
            }}
            name="test_type"
            label="Select test type"
            options={[
              { id: "OET", label: "OET", value: "OET" },
              { id: "GMAT", label: "GMAT", value: "GMAT" },
              { id: "GRE", label: "GRE", value: "GRE" },
              { id: "TOFEL", label: "TOFEL", value: "TOFEL" },
              { id: "IELT", label: "IELT", value: "IELT" },
            ]}
          />

          {/* <div>
            <label>Type of Tuition</label>
            <TextField
              select
              value={tuitionType}
              onChange={handleTuitionTypeChange}
              variant="outlined"
              fullWidth
              name="tuition_type"
            >
              <MenuItem value="">Select an option</MenuItem>
              <MenuItem value="OnlineP">Online - Prestige (3 weeks)</MenuItem>
              <MenuItem value="OnlineN">Online - Normal (2 months)</MenuItem>
              <MenuItem value="ClassP">Class - Prestige (3 weeks)</MenuItem>
              <MenuItem value="ClassN">Class - Normal (2 months)</MenuItem>
            </TextField>
          </div> */}
          <Select
            // onValueChange={(val) => {
            //   if (val?.[0].id == "gh") {
            //     handleLocationChange("Ghana")
            //   } else if (val?.[0].id == "intl") {
            //     handleLocationChange("Abroad")
            //   }
            // }}

            onChange={(e) => {
              handleTuitionTypeChange(e?.target.value ?? "");
            }}
            name="tuition_type"
            label="Type of tuition"
            options={[
              {
                id: "OnlineP",
                label: "Online - Prestige (3 weeks)",
                value: "OnlineP",
              },
              {
                id: "OnlineN",
                label: "Online - Normal (2 months)",
                value: "OnlineN",
              },
              {
                id: "ClassP",
                label: "Class - Prestige (3 weeks)",
                value: "ClassP",
              },
              {
                id: "ClassN",
                label: "Class - Normal (2 months)",
                value: "ClassN",
              },
            ]}
          />
          <div>
            <Input
              placeholder="Amount to be paid"
              type="text"
              name="Amount"
              value={amount}
              readonly
              size="lg"
            />
          </div>
        </section>
      </>
    </form>
  );
};

export default Forms;
