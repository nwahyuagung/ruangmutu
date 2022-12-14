import { useEffect, useState } from 'react'
import { Checkbox, Row, Col } from "antd"

import { Title } from "../../../atoms/Title/Title"

import "./FirstStep.less";
import { fetchApiGet } from '../../../../globals/fetchApi';

export const FirstStep = ({
  defaultValues = [],
  onChangeForm
}) => {
  const [selected, setSelected] = useState([]) //eslint-disable-line
  const [programs, setPrograms] = useState([])

  const handleChange = (e) => {
    let temp = [...defaultValues];
    if (temp.some((x) => e.target.value === x)) {
      let index = temp.findIndex((x) => x === e.target.value);
      temp.splice(index, 1)
    } else {
      temp.push(e.target.value)
    }
    onChangeForm(temp)
  }

  useEffect(() => {
    fetchApiGet('/program?paginate=false').then((res) => {
      if (res) {
        setPrograms(res.data);
      }
    }).catch(e => null)
  }, [])

  useEffect(() => {
    setSelected(defaultValues)
  }, [defaultValues])

  return (
    <div className="first-step">
      <Title level={4} className="first-step__title">
        TENTUKAN KETERKAITAN UNIT SOP YANG AKAN DIBUAT
        <span className="text text--hint">*dapat pilih lebih dari satu</span>
      </Title>

      <Row gutter={[16, 16]}>
        {
          programs && programs.map((option, index) => (
            <Col xs={24} sm={12} md={6} lg={6} key={index}>
              <Checkbox value={option.id} checked={defaultValues.some((x) => x === option.id)} onChange={handleChange} style={{textTransform: 'uppercase'}} className="box radio radio--primary">
                {option.name}
              </Checkbox>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}
