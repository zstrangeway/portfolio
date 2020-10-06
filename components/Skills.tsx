import styles from "../styles/Skills.module.css";

const Skills = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h2>Skills</h2>
      <div>
        <ul>
          <li>
            AWS: Lambda, EC2, CloudFormation, RDS, S3, DynamoDB, API Gateway,
            CodeBuild, etc.
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Swift</li>
          <li>Kotlin</li>
          <li>REST</li>
          <li>Git</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Javascript/Node/Vue</li>
          <li>HTML5/CSS3</li>
          <li>PHP</li>
          <li>SQL</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
