const mapDBToModel = ({
  id,
  title,
  body,
  tags,
  created_at: createdAt,
  updated_at: updatedAt,
}) => ({
  id,
  title,
  body,
  tags,
  createdAt,
  updatedAt,
});

module.exports = { mapDBToModel };
