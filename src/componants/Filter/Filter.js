import React, { useState, useEffect } from "react";
// import ProductsPage from "../../pages/ProductsPage";
import getWebsites from "../../services/getWebsites";
import {
  Background,
  FilterContent,
  FilterWrapper,
  FilterCloseBtn,
  FilterTitle,
  RadioInput,
  WebsiteList,
  RadioBtnWrapper,
  BtnContainer,
  Btn,
  WebsiteListWrapper,
  TitleWrapper,
  FilterButton,
  Radiolabel,
} from "./FilterElement";

function Filter(props) {
  const [selectedValues, setSelectedValues] = useState([]);
  const [websites, setWebsites] = useState([]);
  const [sort, setSort] = useState(0);

  useEffect(() => {
    async function getSites() {
      let response = await getWebsites(props.category, props.type);
      setWebsites(response);
    }
    getSites();
  }, [props.category, props.type]);

  let handleButton = (button) => {
    if (!selectedValues.includes(button)) {
      setSelectedValues([...selectedValues, button]);
    } else {
      selectedValues.splice(selectedValues.indexOf(button), 1);
      setSelectedValues([...selectedValues]);
    }
  };

  let handleSort = (sort) => {
    setSort(sort);
  };

  const handleFilterApply = () => {
    props.selectedWebsites(selectedValues, sort);
  };

  return (
    <>
      {props.showFilter ? (
        <Background>
          <FilterWrapper>
            <FilterContent>
              <TitleWrapper>
                <FilterTitle>Sort By Price</FilterTitle>
              </TitleWrapper>

              <RadioBtnWrapper>
                <Radiolabel>
                  <RadioInput
                    onClick={() => {
                      handleSort(1);
                    }}
                    id="1"
                    type="radio"
                    role="radio"
                    name="abc"
                    value="abc"
                  />
                  Low to High
                </Radiolabel>
                <br></br>
                <Radiolabel>
                  <RadioInput
                    onClick={() => {
                      handleSort(0);
                    }}
                    id="1"
                    type="radio"
                    role="radio"
                    name="abc"
                    value="abc"
                  />
                  High To Low
                </Radiolabel>
              </RadioBtnWrapper>
              <hr></hr>
              <FilterTitle>Select your favourite Site</FilterTitle>
              <WebsiteListWrapper>
                <WebsiteList>

                  {websites.map((bt) => (
                    <FilterButton
                      key={bt}
                      onClick={() => handleButton(bt)}
                      selected={selectedValues.includes(bt)}
                    >
                      {bt}
                    </FilterButton>
                  ))}
                </WebsiteList>
                <BtnContainer>
                  <Btn onClick={handleFilterApply}>Apply</Btn>
                </BtnContainer>
              </WebsiteListWrapper>
            </FilterContent>
            <FilterCloseBtn
              aria-label="Close"
              onClick={() => {
                props.setShowFilter((prev) => !prev);
              }}
            ></FilterCloseBtn>
          </FilterWrapper>
        </Background>
      ) : null}
    </>
  );
}

export default Filter;
