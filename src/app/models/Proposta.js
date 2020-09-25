module.exports = (sequelize, DataTypes) => {
    const Proposta = sequelize.define('vw_app', {
      proposta:{ 
        type:DataTypes.STRING,
        primaryKey:true },
      codigo: DataTypes.INTEGER,
      id_parceiro: DataTypes.INTEGER,
      status: DataTypes.STRING,
      produto: DataTypes.STRING,
      tipo: DataTypes.STRING,
      data_envio: DataTypes.DATE,
      banco_origi: DataTypes.STRING,
      entregue: DataTypes.STRING,
      sub_status: DataTypes.STRING,
      parceiro: DataTypes.STRING,
      data_atualizacao: DataTypes.STRING,
      cpf: DataTypes.STRING,
      nome: DataTypes.STRING,
      parcela: DataTypes.STRING,
      convenio: DataTypes.STRING

      },{
          tableName: 'vw_app'
      })
    return Proposta;
  };
