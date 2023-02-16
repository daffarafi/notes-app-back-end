const mapDBToModel = ({
  id,
  title,
  body,
  tags,
  created_at: createdAt,
  updated_at: updatedAt,
  username,
}) => ({
  id,
  title,
  body,
  tags,
  createdAt,
  updatedAt,
  username,
});

module.exports = { mapDBToModel };
